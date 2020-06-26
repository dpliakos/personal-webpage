FROM node:lts-alpine AS Builder

RUN apk update
RUN apk add python make g++

RUN mkdir /app
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .

# ENV NODE_ENV='production'
RUN npm ci

COPY . /app
ENV GATSBY_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:alpine AS Production
COPY --from=CertsLoader /run/secrets/key.pem /tmp/key.pem
COPY --from=CertsLoader /run/secrets/fullchain.pem /tmp/fullchain.pem
COPY --from=Builder --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid
