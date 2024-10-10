FROM node:20.11.1

RUN mkdir -p /app/dist/src/style /app/dist/src/links /app/src/links

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y sqlite3 && npm install -g typescript sass

RUN tsc && sqlite3 /app/dist/src/links/links.db < /app/src/links/schema.sql && sass /app/src/style/main.sass /app/dist/src/style/main.css

EXPOSE 3000

CMD ["npm", "start"]
