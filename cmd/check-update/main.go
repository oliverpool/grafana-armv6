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
const versionPrefix = "v8."

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
	req, err := http.NewRequest("GET", baseURL+"releases", nil)
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
		TagName string `json:"tag_name"`
	}
	var gr []githubResponse
	err = json.NewDecoder(resp.Body).Decode(&gr)
	if err != nil {
		return "", err
	}
	if len(gr) == 0 {
		return "", errors.New("got no releases")
	}
	for _, r := range gr {
		if len(r.TagName) <= 3 || r.TagName[:3] != versionPrefix {
			continue
		}
		return r.TagName, nil
	}
	return "", errors.New("got no usable release")
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
			Type string `json:"type"`
			Sha  string `json:"sha"`
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
	switch gr.Object.Type {
	case "commit":
		return gr.Object.Sha, nil
	case "tag":
		break
	default:
		return "", errors.New("unsupported object type: " + gr.Object.Type)
	}

	// get commit sha1
	// https://stackoverflow.com/a/67041031/3207406
	req, err = http.NewRequest("GET", baseURL+"git/tags/"+gr.Object.Sha, nil)
	if err != nil {
		return "", err
	}
	req.Header.Add("Accept", "application/vnd.github.v3+json")
	resp, err = http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	err = json.NewDecoder(resp.Body).Decode(&gr)
	if err != nil {
		return "", err
	}
	if gr.Object.Sha == "" {
		return "", errors.New("could not get sha from tag: " + gr.Message)
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
