# imgタグのsrcに渡すパス解決に関する注意

Viteを前提とした開発をしていると、例えば何らかのファイルAにおいて

```
<img src="../../../../assets/images/certain_icon.png">
```

のように書いているとしても、Aが配置されている場所を基準にして解決されるのではなく<br>
ブラウザが現在のページURLを基準に解決することとなり、Vite側も単なる文字列としてしか<br>
理解できず、システム上の配置場所が正しくともブラウザでは404となってしまう。

## Vite開発での正しい書き方

以下のようにJavaScriptモジュールとして直接importするのが良い。

```
import certainIcon from '../../../../assets/images/certain_icon.png';
```
