package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"
)

func main() {
	if err := run(); err != nil {
		log.Println(err)

		os.Exit(1)
	}
}

const baseURL = "https://api.github.com/repos/grafana/grafana/"

func run() error {
	log.Println("checking:", baseURL)
	tagName, err := githubLatestTag()
	if err != nil {
		return err
	}
	log.Println("latest tag:", tagName)

	latestSha, err := githubCommitSha(tagName)
	if err != nil {
		return err
	}
	log.Println("latest commit:", latestSha)

	currentSha, err := submoduleSha("grafana-sources")
	if err != nil {
		return err
	}
	log.Println("submodule commit:", currentSha)

	if latestSha == currentSha {
		log.Println("already up to date")
		return nil
	}
	fmt.Println(latestSha + ":" + tagName)

	return nil
}

func githubLatestTag() (string, error) {
	req, err := http.NewRequest("GET", baseURL+"releases/latest", nil)
	if err != nil {
		return "", err
	}
	req.Header.Add("Accept", "application/vnd.github.v3+json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	type githubResponse struct {
		Message string `json:"message"`
		TagName string `json:"tag_name"`
	}
	var gr githubResponse
	err = json.NewDecoder(resp.Body).Decode(&gr)
	if err != nil {
		return "", err
	}
	if gr.TagName == "" {
		return "", errors.New("could not get tag_name: " + gr.Message)
	}
	return gr.TagName, nil

}

func githubCommitSha(tagName string) (string, error) {
	req, err := http.NewRequest("GET", baseURL+"git/ref/tags/"+tagName, nil)
	if err != nil {
		return "", err
	}
	req.Header.Add("Accept", "application/vnd.github.v3+json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	type githubResponse struct {
		Message string `json:"message"`
		Object  struct {
			Sha string `json:"sha"`
		} `json:"object"`
	}
	var gr githubResponse
	err = json.NewDecoder(resp.Body).Decode(&gr)
	if err != nil {
		return "", err
	}
	if gr.Object.Sha == "" {
		return "", errors.New("could not get sha: " + gr.Message)
	}
	return gr.Object.Sha, nil
}

func submoduleSha(submodule string) (string, error) {
	cmd := exec.Command("git", "rev-parse", "HEAD:"+submodule)
	cmd.Stderr = os.Stderr
	out, err := cmd.Output()
	if err != nil {
		return "", err
	}
	return strings.TrimSpace(string(out)), nil
}