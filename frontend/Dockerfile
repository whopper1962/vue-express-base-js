FROM node:18.1-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
