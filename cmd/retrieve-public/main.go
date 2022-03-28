package main

import (
	"archive/tar"
	"compress/gzip"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	if err := run(); err != nil {
		log.Println(err)

		os.Exit(1)
	}
}

const publicPath = "_gokrazy/extrafiles/grafana"

func run() error {
	version := strings.TrimLeft(os.Args[1], "v")
	downloadURL := "https://dl.grafana.com/oss/release/grafana-" + version + ".linux-armv6.tar.gz"
	fmt.Println(downloadURL)

	resp, err := http.Get(downloadURL)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		return fmt.Errorf("unexpected status code: %d", resp.StatusCode)
	}
	gzf, err := gzip.NewReader(resp.Body)
	if err != nil {
		return err
	}

	tarReader := tar.NewReader(gzf)

	for {
		header, err := tarReader.Next()
		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}

		name := header.Name

		switch header.Typeflag {
		case tar.TypeDir:
			continue
		case tar.TypeReg:
			_, relName, _ := strings.Cut(name, "/")
			if !strings.HasPrefix(relName, "public/") {
				fmt.Println("skip", relName)
				continue
			}
			fmt.Println("extract", relName)
			if err := writeFile(filepath.Join(publicPath, relName), io.LimitReader(tarReader, header.Size)); err != nil {
				return err
			}

		default:
			fmt.Println("unknown type", header.Typeflag)
		}
	}
	return nil
}

func writeFile(dst string, r io.Reader) error {
	if err := os.MkdirAll(filepath.Dir(dst), 0755); err != nil {
		return err
	}

	f, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer f.Close()
	_, err = io.Copy(f, r)
	if err != nil {
		return err
	}
	return f.Close()
}
