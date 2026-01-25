FROM node:20-alpine AS builder

RUN apk add --no-cache maven bash

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY src ./src
COPY index.html .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY svelte.config.js .

RUN npm run build-keycloak-theme

FROM node:20-bullseye-slim AS exporter

WORKDIR /app
COPY --from=builder /app/dist_keycloak ./dist_keycloak

VOLUME /app/dist_keycloak
