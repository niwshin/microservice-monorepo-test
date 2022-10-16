# monorepo で Docker 環境

## FE と BE だけ考える

- FE: Node + React
- BE: Node + Fastify

## files

- repository root/
  - compose.yml -- 開発環境の start まで。
  - frontend/
    - Dockerfile -- npm ci まで
  - backend/
    - Dockerfile -- npm ci まで

## setup

### 1. 依存パッケージのインストール

git 動かすのに docker 環境に手を入れなくちゃいけないのがめんどくさすぎるので、
ビルド前に `npm ci` してお茶を濁す.

```bash
docker compose build
docker compose run --rm frontend_dev npm ci
docker compose run --rm backend_dev npm ci
```

### 2. 起動

```bash
docker compose up
```

### 3. 動作確認

#### backend

```sh
curl http://localhost:53000/api/ping
```

#### frontend

open [http://localhost:53001](http://localhost:53001) in browser

## 動かすコマンド

依存パッケージのインストール

とりあえず `npm init` で開発環境作る

必要であれば　`npm run build`　する

立ち上げる `npm start`
