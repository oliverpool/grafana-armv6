set -x
echo "before"
apt-get -y install golang-go
wget -O src.tar.gz https://github.com/grafana/grafana/archive/refs/tags/v8.4.4.tar.gz
tar xf src.tar.gz
ls
cd src
ls
GOARCH=arm64 CGO_ENABLED=1 CC=aarch64-linux-gnu-gcc go build \
  -ldflags "-linkmode external -extldflags -static" \
  github.com/grafana/grafana/pkg/cmd/grafana-server@v8.4.4
echo "after"