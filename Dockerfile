FROM arm32v6/node:carbon-alpine
RUN ["mkdir", "-p", "/usr/src/app"]
WORKDIR /usr/src/app
COPY server.js ./
COPY bundle.js ./
COPY static ./static
COPY style ./style
COPY index.html ./

EXPOSE 3000

CMD node server.js
