# Use Node 22.5 as the build environment
FROM node:22.5-alpine AS build

# Create app directory
WORKDIR /app

COPY package.json package-lock.json ./

# Install deps
RUN npm ci

RUN ls -l

# Bundle app source
COPY . ./

# Build
RUN npm run build

# Use Node 22.5 for the final image
FROM node:22.5-alpine

# Create app directory
WORKDIR /app ./

# Copy in the build artifacts
COPY --from=build /app/build ./build
COPY package.json ./

# Start the node server
CMD [ "node", "build/index.js" ]
