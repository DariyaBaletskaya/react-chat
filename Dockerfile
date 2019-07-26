FROM node:10.15-alpine

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY /public /app/public
ENV PATH /app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
RUN npm install react-scripts -g --silent

CMD ["npm", "start"]

