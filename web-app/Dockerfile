FROM ubuntu:22.04
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y nodejs npm
RUN npm install 
CMD ["npm","run","devStart"]