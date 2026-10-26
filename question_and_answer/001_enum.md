# enumを利用したtsコードを書けない

Javaと同じような感覚で

```
export enum ScreenId {
  FIRST = 'first',
  MAIN_MENU = 'mainMenu',
}
```

という書き方をしたくなるが、この書き方は単にTypeScriptの型情報を持つだけではなく実行時に使用されるJavaScriptコードを生成する。<br>
一般に、TypeScriptが型として認める構文とViteが正しく変換できる構文が常に完全一致するとは限らず、<br>
TypeScriptのコードから型の情報を消し去るのみで正しくJavaScriptへ変換できない場合は正常動作が保証されない場合がある。<br>
従って、Viteと併用して開発している場合は上記のような書き方は推奨されず<br>
my-react-app\tsconfig.app.json<br>
において

```
"erasableSyntaxOnly": true
```

により「型情報を消すだけでJavaScriptにできる構文のみ許可する」という制約が課されている。<br>
これが根本的な理由となって、上記のような記述の仕方が許されずエラーと見なされる。

## エラーメッセージの例

```
This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
```
