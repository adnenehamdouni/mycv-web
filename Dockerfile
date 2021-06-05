# BASE IMAGE with an alias #
FROM node:14.16.1 as build

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli

WORKDIR /app
COPY package.json /app

RUN npm install && npm cache clean --force && npm cache verify

COPY . /app

RUN ng build
#RUN ng start:prod
#RUN ng serve

# BASE IMAGE with an alias #
FROM nginx as runtime

# Copy contents from the other container with alias "build" #
# onto the specified path in the current container#
COPY --from=build /app/dist/mycv /usr/share/nginx/html

EXPOSE 84
