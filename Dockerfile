FROM --platform=linux/arm64/v8 node:18-alpine AS build
# Install dependencies only when needed
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


# Build Stage
FROM --platform=linux/arm64/v8 node:18-alpine AS build-stage
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 



WORKDIR /app
COPY --from=build --chown=nextuser:nextuser /app/public ./public
COPY --from=build --chown=nextuser:nextuser /app/.next/standalone ./
COPY --from=build --chown=nextuser:nextuser /app/.next/static ./.next/static

USER nextuser

EXPOSE 3000

ENV HOST=0.0.0.0 PORT=3000 
CMD ["dumb-init","node","server.js"]