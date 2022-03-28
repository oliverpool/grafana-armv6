package main

import (
	"errors"
	"io"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/gokrazy/gokrazy"
)

func main() {
	if err := run(); err != nil {
		log.Println(err)

		os.Exit(1)
	}
}

func run() error {
	gokrazy.WaitForClock()

	src := "/grafana/server"
	dst := "/perm/grafana/server"
	shouldCopy, err := shouldCopyFile(src, dst, 0111)
	if err != nil {
		log.Println(err)
	}
	if shouldCopy {
		if err := os.MkdirAll(filepath.Dir(dst), 0755); err != nil {
			return err
		}
		if err := copyFile(src, dst, 0111); err != nil {
			return err
		}
		log.Println(src, "copied to", dst)
	} else {
		log.Println(dst, "already up to date")
	}

	cmd := exec.Command(dst, "-config", "/grafana/conf/custom.ini")
	cmd.Dir = "/grafana"
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func shouldCopyFile(src, dst string, neededMode fs.FileMode) (bool, error) {
	dstStat, err := os.Stat(dst)
	if err != nil {
		if errors.Is(err, fs.ErrNotExist) {
			err = nil
		}
		return true, err
	}

	srcStat, err := os.Stat(src)
	if err != nil {
		return false, err
	}
	if srcStat.Mode()&neededMode == 0 { // missing mode
		return true, nil
	}

	if dstStat.Size() != srcStat.Size() {
		return true, nil
	}

	// TODO: md5 check?
	return false, nil
}

func copyFile(src, dst string, additionalMode fs.FileMode) error {
	from, err := os.Open(src)
	if err != nil {
		return err
	}
	defer from.Close()
	finfo, err := from.Stat()
	if err != nil {
		return err
	}
	to, err := os.OpenFile(dst, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, finfo.Mode()|additionalMode)
	if err != nil {
		return err
	}
	defer to.Close()
	_, err = io.Copy(to, from)
	if err != nil {
		return err
	}
	if err := to.Chmod(finfo.Mode() | additionalMode); err != nil {
		return err
	}
	return to.Close()
}
