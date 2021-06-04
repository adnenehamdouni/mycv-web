FROM node:14.16.1

WORKDIR /app
COPY package.json /app

RUN npm install && npm cache clean --force
RUN npm install -g @angular/cli

COPY . /app

CMD ["npm", "run", "build"]

EXPOSE 4201
