monorepo で Docker 環境
=================

FE と BE だけ考える
----------

- FE: Node + React
- BE: Node + Fastify

files
----------

- repository root/
  - compose.yml -- 開発環境の start まで。
  - frontend/
    - Dockerfile -- npm ci まで
  - backend/
    - Dockerfile -- npm ci まで

動かすコマンド
-----------

依存パッケージのインストール

とりあえず `npm init` で開発環境作る

必要であれば　`npm run build`　する

立ち上げる `npm start`
