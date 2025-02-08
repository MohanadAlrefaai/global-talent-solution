# use node 16 alpine image as build image
FROM node:18.19.1-alpine as builder

# create work directory in app folder
WORKDIR /app
# install required packages for node image

# copy over package.json files
COPY package.json /app/
# COPY package-lock.json /app/

# install all depencies
RUN npm install 

# copy over all files to the work directory
ADD . /app

# build the project
RUN npm run build

FROM node:18.19.1-alpine

WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/.output  /app/.output

# expose the host and port 10804 to the server
ENV HOST 0.0.0.0


# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]