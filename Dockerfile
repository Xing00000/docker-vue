FROM node:8.11.3-alpine

RUN npm install -g yarm
RUN yarn global add @vue/cli