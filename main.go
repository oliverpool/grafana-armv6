package main

import (
	"log"
	"os"
	"os/exec"

	"github.com/gokrazy/gokrazy"
)

func main() {
	gokrazy.WaitForClock()

	cmd := exec.Command("/grafana/server", "-config", "/grafana/conf/custom.ini")
	cmd.Dir = "/grafana"
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		log.Println(err)
		os.Exit(1)
	}
}
