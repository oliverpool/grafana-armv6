# fail on error
set -euxo pipefail

echo "before"
apt-get -y install golang-go curl
mkdir grafana
cd grafana
curl --location https://github.com/grafana/grafana/archive/refs/tags/v8.4.4.tar.gz | tar -xz --strip-components=1
ls
GOARCH=arm64 CGO_ENABLED=1 CC=aarch64-linux-gnu-gcc go build \
  -ldflags "-linkmode external -extldflags -static" \
  pkg/cmd/grafana-server
echo "after"