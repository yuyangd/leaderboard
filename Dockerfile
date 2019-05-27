FROM node:10

RUN mkdir /work
WORKDIR /work

COPY ./src ./
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
VOLUME /work/node_modules