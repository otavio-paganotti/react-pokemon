
# see https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG NODE_VERSION=node:18.15.0

FROM $NODE_VERSION AS dependency-base

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
RUN yarn

FROM dependency-base AS production-base

# build will also take care of building
# if necessary
COPY . .

RUN yarn build

EXPOSE $VITE_PORT

CMD ["yarn", "preview"]