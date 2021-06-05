FROM node:14.16.1

WORKDIR /app
COPY package.json /app

RUN npm install && npm cache clean --force && npm cache verify
RUN npm install -g @angular/cli

COPY . /app

RUN ng build
Run ng serve

EXPOSE 4201
