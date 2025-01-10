# build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . . 

RUN npm run build

# serve stage
FROM node:18-alpine AS server

WORKDIR /app

COPY --from=builder /app/build ./

COPY package.json package-lock.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npx", "serve", "-s", ".", "-l", "3000"]