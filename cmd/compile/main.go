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
	"github.com/otiai10/copy"
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
		"-v", grafanaFolder+":/src",
		"ghcr.io/oliverpool/grafana-armv6:main",
	)
	dockerRunWithGoEnv := execCmd(nil, os.Stdout, os.Stderr,
		"docker",
		"run",
		"--rm", // cleanup afterwards
		"-v", grafanaFolder+":/src",
		"--env", "GOOS=linux",
		"--env", "GOARCH=arm",
		"--env", "GOARM=6",
		"--env", "CGO_ENABLED=1",
		"--env", "CC=arm-linux-gnueabihf-gcc",
		"ghcr.io/oliverpool/grafana-armv6:main",
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
		// -w -s https://stackoverflow.com/a/22276273/3207406 reduce binary size
		// -linkmode external -extldflags -static : static linking (https://gokrazy.org/prototyping/)
		// -marm https://stackoverflow.com/q/35132319/3207406
		"-ldflags", "-w -s -linkmode external -extldflags -static",
		"-o", "./bin/linux-armv6/grafana-server",
		"-buildvcs=false",
		"./pkg/cmd/grafana-server",
	); err != nil {
		return err
	}
	if err := chown("bin/linux-armv6"); err != nil {
		return err
	}

	binFolder := filepath.Join(grafanaFolder, "bin", "linux-armv6")
	extraFiles := filepath.Join("_gokrazy", "extrafiles", "grafana")
	os.RemoveAll(extraFiles) // ignore any error

	// move server binary
	if err := os.Rename(filepath.Join(binFolder, "grafana-server"), filepath.Join(extraFiles, "server")); err != nil {
		return err
	}

	// copy conf folder
	if err = copy.Copy(filepath.Join(grafanaFolder, "conf"), filepath.Join(extraFiles, "conf")); err != nil {
		return err
	}
	// copy public folder
	if err = copy.Copy(filepath.Join(grafanaFolder, "public"), filepath.Join(extraFiles, "public")); err != nil {
		return err
	}

	return nil
}
