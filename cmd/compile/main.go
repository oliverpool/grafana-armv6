package main

import (
	"flag"
	"fmt"
	"io"
	"log"
	"os"
	"os/user"
	"path/filepath"

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
		"ghcr.io/gokrazy-community/crossbuild-armhf:impish-20220316-go",
	)
	dockerRunWithGoEnv := execCmd(nil, os.Stdout, os.Stderr,
		"docker",
		"run",
		"--rm", // cleanup afterwards
		"-v", grafanaFolder+":/root/armhf",
		"--env", "GOARCH=arm",
		"--env", "CGO_ENABLED=1",
		"--env", "CC=arm-linux-gnueabihf-gcc",
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

	// compile grafana
	if err := dockerRunWithGoEnv(
		"go", "build",
		"-ldflags", "-linkmode external -extldflags -static",
		"-o", "./bin/linux-armv6/grafana-server",
		"./pkg/cmd/grafana-server",
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

	// copy grafana binary
	if err = sh.Copy(filepath.Join(dstFolder, "grafana"), filepath.Join(binFolder, "grafana-server")); err != nil {
		return err
	}

	if err = os.WriteFile(filepath.Join(dstFolder, "placeholder.go"), []byte(`package dist

// empty package so we can use the go tool with this repository
`), 0755); err != nil {
		return err
	}

	return nil
}
