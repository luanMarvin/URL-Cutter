FROM node:20.11.1

RUN mkdir -p /app/dist/src/style /app/dist/src/database /app/src/database

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y sqlite3 && npm install -g typescript

RUN npm i

RUN npm install sqlite3 --build-from-source

RUN tsc && sqlite3 /app/dist/src/database/links.db < /app/src/database/schema.sql 

EXPOSE 3000

CMD ["npm", "start"]