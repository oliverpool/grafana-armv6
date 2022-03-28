package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"io/fs"
	"log"
	"os"
	"os/user"
	"path/filepath"
	"strings"

	"github.com/magefile/mage/sh"
)

func main() {
	if err := run(); err != nil {
		log.Println(err)

		os.Exit(1)
	}
}

func execCmd(env map[string]string, stdout io.Writer, stderr io.Writer, cmd string, args ...string) func(args ...string) error {
	return func(args2 ...string) error {
		fmt.Println(cmd, args2)
		_, err := sh.Exec(env, stdout, stderr, cmd, append(args, args2...)...)
		return err
	}
}

var grafanaFolderFlag = flag.String("grafana", "./grafana-sources", "folder containing the grafana to compile")

func run() error {
	flag.Parse()

	grafanaFolder, err := filepath.Abs(*grafanaFolderFlag)
	if err != nil {
		return err
	}

	fmt.Println("[grafana]", grafanaFolder)

	dockerRun := execCmd(nil, os.Stdout, os.Stderr,
		"docker",
		"run",
		"--rm", // cleanup afterwards
		"-v", grafanaFolder+":/root/armhf",
		"--env", "LDFLAGS=-static",
		"ghcr.io/gokrazy-community/crossbuild-armhf:impish-20220316-go",
	)
	// change the owner of the files inside docker to the current user
	chown := func(folder string) error {
		user, err := user.Current()
		if err != nil {
			return err
		}
		return dockerRun("chown", "-R", user.Uid+":"+user.Gid, folder)
	}

	// needed for wire_gen
	if err := dockerRun("make", "gen-go"); err != nil {
		return err
	}
	if err := chown("pkg/build/cmd.go"); err != nil {
		return err
	}

	// adjust pkg/build/cmd.go for static linking
	configPath := filepath.Join(grafanaFolder, "pkg", "build", "cmd.go")
	found := 0
	substr := `" -extldflags`
	err = adjustTextFile(configPath, func(line string) string {
		if strings.Contains(line, substr) {
			found++
			return strings.ReplaceAll(line, substr, `" -linkmode external -extldflags`)
		}
		return line
	})
	if err != nil {
		return err
	}
	if found != 1 {
		return fmt.Errorf("could not add '-linkmode external' for static linking to pkg/build/cmd.go: %d", found)
	}

	// compile grafana
	// LDFLAGS="-static" go run build.go -goarch=armv6 -cgo-enabled=1 -cc=arm-linux-gnueabihf-gcc -pkg-arch=armhf build-server
	if err := dockerRun(
		"go", "run", "build.go",
		"-goarch=armv6", "-cgo-enabled=1", "-cc=arm-linux-gnueabihf-gcc", "-pkg-arch=armhf",
		"build-server",
	); err != nil {
		return err
	}
	if err := chown("bin/linux-armv6/grafana-server"); err != nil {
		return err
	}

	binFolder := filepath.Join(grafanaFolder, "bin", "linux-armv6")
	dstFolder := filepath.Join(".", "dist") // TODO: extrafiles
	os.RemoveAll(dstFolder)                 // ignore any error
	if err = os.MkdirAll(dstFolder, 0755); err != nil {
		return err
	}

	// move grafana binary
	if err = os.Rename(filepath.Join(binFolder, "grafana-server"), filepath.Join(dstFolder, "grafana")); err != nil {
		return err
	}

	if err = os.WriteFile(filepath.Join(dstFolder, "placeholder.go"), []byte(`package dist

// empty package so we can use the go tool with this repository
`), 0755); err != nil {
		return err
	}

	return nil
}

func adjustTextFile(path string, replaceLine func(string) string) error {
	b, stat, err := readFile(path) // read the whole file in memory, since we are going to overwrite it
	if err != nil {
		return err
	}

	dst, err := os.OpenFile(path, os.O_TRUNC|os.O_WRONLY, stat.Mode())
	if err != nil {
		return err
	}
	defer dst.Close()
	w := bufio.NewWriter(dst)

	for _, line := range strings.Split(string(b), "\n") {
		_, err = w.WriteString(replaceLine(line) + "\n")
		if err != nil {
			return err
		}
	}
	err = w.Flush()
	if err != nil {
		return err
	}
	return dst.Close()
}

func readFile(path string) ([]byte, fs.FileInfo, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, nil, err
	}
	defer f.Close()
	b, err := io.ReadAll(f)
	if err != nil {
		return b, nil, err
	}

	stats, err := f.Stat()
	return b, stats, err
}
