# fail on error
set -euxo pipefail

apt-get -y install golang-go curl

mkdir grafana
cd grafana
curl --location https://github.com/grafana/grafana/archive/refs/tags/v8.4.4.tar.gz | tar -xz --strip-components=1
LDFLAGS="-static" go run build.go -goarch=armv6 -cgo-enabled=1 -cc=arm-linux-gnueabihf-gcc -cxx=arm-linux-gnueabihf-g++ -pkg-arch=armhf build build-server

# GOARCH=arm CGO_ENABLED=1 CC=arm-linux-gnueabihf-gcc go build \
#   -ldflags "-linkmode external -extldflags -static" \
#   ./pkg/cmd/grafana-server/
ls -alh grafana-server
echo "after"