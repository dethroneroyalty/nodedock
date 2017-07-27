FROM node:8

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 3000

ENV NAME World

CMD ["node", "index.js"]
