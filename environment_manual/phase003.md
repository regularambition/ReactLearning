# Git管理準備(.gitignoreの設定)

my-react-app\\.gitignore<br>の通りに記述

# Git管理する時の改行コード混在に由来する警告の解消

Vite＋React＋TypeScript構成では改行コードをLFに統一するのが望ましいためそのための設定を行う

## .gitattributes の導入

プロジェクトルートに上記の名前でファイルを作成し、本リポジトリに上げている同ファイルの通りに記述

## 既存リソースの改行コード変更

各ファイルをVSCodeで開き、画面右下の「CRLF」をクリックして「LF」に変更

## gitコマンドを実行(プロジェクトルートで実行)

### git管理対象に追加

```
git add .
```

### git管理対象ファイルに改行コード設定を再適用

```
git add --renormalize .
```

### git管理対象ファイルの改行コード状態を確認

```
git ls-files --eol
```

この結果として全ファイルについて

```
i/lf    w/lf    attr/text=auto eol=lf
```

のように表示されていれば成功
