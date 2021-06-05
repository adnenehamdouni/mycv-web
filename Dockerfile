FROM node:latest as build

WORKDIR /app
COPY package.json /app

RUN rm -rf node_modules package-lock.json
RUN npm install && npm cache clean --force && npm cache verify
RUN npm install -g @angular/cli

COPY . /app

RUN ng build
#RUN ng start:prod
#RUN ng serve

EXPOSE 4200
