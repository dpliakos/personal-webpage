FROM node:jessie

RUN apt update
RUN apt install python make g++ 

WORKDIR /app
COPY ./package.json .

RUN npm install

COPY . /app
RUN npm run build