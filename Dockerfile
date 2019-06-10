FROM node:latest

ENV TZ="/usr/share/zoneinfo/Asia/Seoul"

ARG PROJECT_DIR=/home/biss-server/backend

COPY . ${PROJECT_DIR}

WORKDIR ${PROJECT_DIR}

RUN npm install

RUN npm run test

EXPOSE 3000

CMD ["npm", "start"]