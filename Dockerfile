FROM node:20-bullseye-slim AS builder

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .
COPY . .

RUN npm install

RUN npm run build

FROM node:20-bullseye-slim AS runner

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder app/dist dist
COPY --from=builder app/public public
COPY --from=builder app/package*.json .

RUN npm install --omit=dev

EXPOSE 4000

CMD ["node", "dist/src/index.js"]
