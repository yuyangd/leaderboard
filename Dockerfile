FROM node:10

WORKDIR /work

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./src ./

VOLUME /work/node_modules