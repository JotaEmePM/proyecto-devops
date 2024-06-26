FROM node:alpine
    WORKDIR /usr/app
    COPY package.json .
    RUN npm install
    COPY . .
    RUN npm run build
    CMD ["node", "./dist/index.js"]