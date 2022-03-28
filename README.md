# Grafana statically compiled for armv6

This package uses https://github.com/Pro/raspi-toolchain to statically cross-compile [grafana](https://github.com/grafana/grafana), for usage by the [gokrazy](https://github.com/gokrazy/gokrazy) project.

Usage:

```
gokr-packer \
    github.com/oliverpool/grafana-armv6
```

You can [adjust the configuration](https://gokrazy.org/userguide/package-config/#extrafiles) by adding a `extrafiles/github.com/oliverpool/grafana-armv6/grafana/conf/custom.ini` file.
