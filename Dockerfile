FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install && npm cache clean

COPY . /app

CMD ["npm", "run", "build"]
