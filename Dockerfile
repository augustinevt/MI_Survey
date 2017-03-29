FROM dockerregistry.monsoontools.com/ubuntunode:latest

RUN mkdir /app

WORKDIR /app

# Install app dependencies

COPY package.json
RUN npm install

# Bundle app source
COPY . /build

EXPOSE 8080
CMD [ "npm", "start" ]
