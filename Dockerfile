#syntax=docker/dockerfile:1.4

FROM node:lts AS app_node

ENV NODE_ENV=development
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /srv/app

COPY --link . .

RUN yarn install
RUN rm -Rf docker/

COPY --link docker/node/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
