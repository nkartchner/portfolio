FROM node:12

WORKDIR /var/www/Portfolio

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./src/ ./src
COPY ./public/ ./public
ARG PUBLIC_URL
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]