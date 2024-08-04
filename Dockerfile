FROM node:10

WORKDIR /app
COPY ./*.js .
COPY ./package.json .
RUN yarn install
EXPOSE 3000
CMD [ "node", "/app/main.js" ]
