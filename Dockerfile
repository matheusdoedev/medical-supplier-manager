#build stage
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY . .

COPY ./.env.production ./.env

RUN yarn

RUN yarn build

EXPOSE 80
CMD [ "yarn", "preview" ]