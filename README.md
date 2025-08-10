# 初期設定の手順

## 依存関係のインストール
```
pnpm i
```

## lefthook有効化
```
pnpm  prepare
```

## .envの作成と設定
```
cp .env.example .env
```

## better authの設定

- BETTER_AUTH_SECRETを生成する。[ここで](https://www.better-auth.com/docs/installation)
- .envにGOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_IDを設定する

## ローカルDB起動
```
docker compose up -d
```

## マイグレーション
```
npx prisma db migrate dev
```

## サーバー起動
```
pnpm  dev
```


# コミット時にエラーが出た場合
コミット時にbiome check（formatとlintの確認）とtypecheck（型エラーの確認）をしています。
- biome checkでエラーが出た場合は以下のコマンドを実行して、再度コミットしてください。 
- typecheckでエラーが出た場合は型エラーを直してから、再度コミットしてください。

```
pnpm  format
```




