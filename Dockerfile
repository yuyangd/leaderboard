FROM node:10

WORKDIR /work

COPY ./src ./
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
VOLUME /work/node_modules