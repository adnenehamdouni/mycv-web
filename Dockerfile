FROM node:14.16.1 as build

WORKDIR /app
COPY package.json /app

RUN npm install && npm cache clean --force && npm cache verify
RUN npm install -g @angular/cli

COPY . /app

RUN ng build
#RUN ng start:prod
#RUN ng serve

EXPOSE 4201
