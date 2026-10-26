# React＋TypeScriptのプロジェクトを作る

## プロジェクトフォルダにアプリケーションの雛形を作成

プロジェクトルートへ移動

```
cd C:\Users\Owner\Documents\ReactLearning
```

my-react-appというフォルダーに、Vite＋React＋TypeScriptの雛形を作成

```
npm.cmd create vite@latest my-react-app -- --template react-ts
```

※パッケージのインストール確認はyを選択し、Oxlint/ESlintではESlintを選択

## 必要なライブラリをインストール

```
cd my-react-app
```

```
npm.cmd install
```

## 導入成功確認

開発用サーバーを起動して以下のURLにアクセスし画面が表示されれば成功

```
http://localhost:5173/
```
