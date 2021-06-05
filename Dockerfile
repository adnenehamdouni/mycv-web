FROM node:14.16.1 as build

WORKDIR /app
COPY package.json /app

RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force && npm cache verify
RUN npm install
RUN npm install -g @angular/cli@12.0.2

COPY . /app

RUN ng build
#RUN ng start:prod
#RUN ng serve

EXPOSE 4200
