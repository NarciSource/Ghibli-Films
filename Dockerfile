FROM node:20-bullseye-slim AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY tsconfig*.json .
COPY src ./src
COPY public ./public
COPY scripts ./scripts

RUN npm run build

FROM node:20-bullseye-slim AS deps

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

FROM node:20-bullseye-slim AS runner

WORKDIR /app

COPY --from=builder app/dist ./dist
COPY --from=builder app/public ./public
COPY --from=deps app/node_modules ./node_modules 

EXPOSE 4000

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

CMD ["node", "dist/src/index.js"]
