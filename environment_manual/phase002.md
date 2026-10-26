# VSCodeでのフォーマッタをいい感じに設定する

my-react-appの階層で以下コマンドを実行

```
npm.cmd install --save-dev --save-exact prettier
```

package.jsonと同じ階層に .prettierrc.json を作成して<br>my-react-app\\.prettierrc.json<br>の通りに記述

```
npm.cmd create vite@latest my-react-app -- --template react-ts
```

VSCodeの画面でCtrl + Shift + Pを押し、以下を検索して開く

```
Preferences: Open Workspace Settings (JSON)
```

設定用JSONファイルを編集する状態となるので<br>.vscode\settings.json<br>の通りに記述
