package main

import (
	"log"
	"os"
	"os/exec"

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

	name := "/grafana/server"
	log.Println("starting", name)
	cmd := exec.Command(name, "-config", "/grafana/conf/custom.ini")
	cmd.Dir = "/grafana"
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}
