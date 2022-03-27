# fail on error
set -euxo pipefail

apt-get -y install golang-go curl

mkdir grafana
cd grafana
curl --location https://github.com/grafana/grafana/archive/refs/tags/v8.4.4.tar.gz | tar -xz --strip-components=1
GOARCH=arm64 CGO_ENABLED=1 CC=aarch64-linux-gnu-gcc go build \
  -ldflags "-linkmode external -extldflags -static" \
  ./pkg/cmd/grafana-server/
ls -alh grafana-server
echo "after"