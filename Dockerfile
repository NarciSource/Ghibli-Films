FROM node:20-bullseye-slim AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY tsconfig*.json .
COPY next.config.ts .
COPY .env* .
COPY src ./src
COPY public ./public

RUN npm run build

FROM node:20-bullseye-slim AS runner

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=true

COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
