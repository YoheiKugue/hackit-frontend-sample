FROM node:20.11.0-slim AS node
FROM ubuntu:22.10 AS base

COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/

WORKDIR /usr/app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo