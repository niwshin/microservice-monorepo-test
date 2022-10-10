## 依存パッケージ取得
FROM node:18.10-bullseye-slim as frontend
WORKDIR /app

ENV CI=true

# in order to use cache, copy files that keep static before run `npm ci`
COPY frontend/package.json .
COPY frontend/package-lock.json .
# use `npm ci` instead of `npm install` because `ci` never change package-lock.json
RUN npm ci
# after install dependencies, COPY all file of react project
COPY frontend .