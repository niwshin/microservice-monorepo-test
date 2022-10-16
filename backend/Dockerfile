FROM node:18.10
WORKDIR /app

ENV CI=true

# in order to use cache, copy files that keep static before run `npm ci`
COPY backend/package.json .
COPY backend/package-lock.json .
# use `npm ci` instead of `npm install` because `ci` never change package-lock.json
RUN npm ci
# after install dependencies, COPY all file of react project
COPY backend .