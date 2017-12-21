FROM hypriot/rpi-node:latest
ENTRYPOINT ["#!/bin/bash"]
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000

CMD node server.js
