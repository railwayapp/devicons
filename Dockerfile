FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . ./

ARG VITE_BASE_URL

RUN bun run build

CMD [ "bun", "run", "server.ts" ]
