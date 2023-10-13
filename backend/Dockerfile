# FROM node:18.8-alpine as base

# FROM base as builder

# WORKDIR /home/node/app
# COPY package*.json ./

# COPY . .
# RUN yarn install
# RUN yarn build

# FROM base as runtime

# ENV NODE_ENV=production
# ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# WORKDIR /home/node/app
# COPY package*.json  ./

# RUN yarn install --production
# COPY --from=builder /home/node/app/dist ./dist
# COPY --from=builder /home/node/app/build ./build

# EXPOSE 3000

# CMD ["node", "dist/server.js"]

FROM node:18.17.0-alpine3.18 as base

FROM base as builder

ARG MONGO_URL PAYLOAD_PUBLIC_SERVER_URL PAYLOAD_SECRET_KEY PAYLOAD_CONFIG_PATH

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn build

FROM base as runtime

ARG MONGO_URL PAYLOAD_PUBLIC_SERVER_URL PAYLOAD_SECRET_KEY PAYLOAD_CONFIG_PATH
ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn install --production

COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

ENV NODE_NO_WARNINGS=1

CMD ["node", "./dist/server.js"]
