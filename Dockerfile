#build stage
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 80
CMD [ "yarn", "preview" ]