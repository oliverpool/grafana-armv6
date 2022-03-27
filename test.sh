# fail on error
set -euxo pipefail

apt-get -y install curl

# download
mkdir grafana
cd grafana
curl --location https://github.com/grafana/grafana/archive/refs/tags/v8.4.4.tar.gz | tar -xz --strip-components=1

# compile
make gen-go
sed -i "s/ -extldflags/ -linkmode external -extldflags/w changelog.txt" "pkg/build/cmd.go"
if [ -s changelog.txt ]; then
    cat changelog.txt
else
    echo "could not add -linkmode external"
    exit 1
fi

LDFLAGS="-static" go run build.go -goarch=armv6 -cgo-enabled=1 -cc=arm-linux-gnueabihf-gcc -pkg-arch=armhf build-server

# GOARCH=arm CGO_ENABLED=1 CC=arm-linux-gnueabihf-gcc go build \
#   -ldflags "-linkmode external -extldflags -static" \
#   ./pkg/cmd/grafana-server/
ls -alh bin/linux-armv6/grafana-server
echo "after"