FROM node:lts-alpine

RUN apk update
RUN apk add python make g++

RUN mkdir /app
WORKDIR /app
COPY ./package.json .

RUN npm install

COPY . /app
RUN npm run build
