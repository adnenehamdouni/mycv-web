# BASE IMAGE with an alias #
FROM node:14.16.1 as build

#ENV HOME=/usr/src/app
ENV HOME=/app

RUN mkdir -p $HOME

WORKDIR $HOME

COPY package.json $HOME

# Install And Clean Cache #
RUN npm install && npm cache clean --force && npm cache verify

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli

COPY . $HOME

RUN ng build
#RUN ng start:prod
#RUN ng serve

EXPOSE 4200

USER 1000
