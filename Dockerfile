FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install \
  && npx update-browserslist-db@latest --update-db || true

COPY . .

EXPOSE 1234

CMD ["npm", "run", "dev"]