FROM node:14

ADD package.json /tmp/package.json

#ADD package-lock.lock /tmp/package-lock.lock

RUN rm -rf build

RUN cd /tmp && npm install

ADD ./ /src

RUN rm -rf src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

RUN npm run build

CMD ["node", "build/src/main.js"]