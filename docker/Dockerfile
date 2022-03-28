
FROM golang:1-bullseye

RUN curl --location https://github.com/Pro/raspi-toolchain/releases/latest/download/raspi-toolchain.tar.gz | tar -xz --strip-components=1 -C /opt

ENV PATH="/opt/cross-pi-gcc/bin:${PATH}"

WORKDIR /src
