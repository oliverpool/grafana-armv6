echo "before"
GOARCH=arm64 CGO_ENABLED=1 CC=aarch64-linux-gnu-gcc go build \
  -ldflags "-linkmode external -extldflags -static" \
  github.com/grafana/grafana/pkg/cmd/grafana-server
echo "after"