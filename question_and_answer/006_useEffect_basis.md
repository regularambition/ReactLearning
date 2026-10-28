# useEffectを理解する

## 端的に言うと

Props・State・Contextなどに基づいてReactが宣言している状態と、DOM APIや通信、タイマー、外部ライブラリなど<br>
Reactのレンダー処理だけでは管理できないシステムの状態を同期するための仕組み

## 大前提：Reactコンポーネントの基本的な役割

「現在のPropsとStateから、どのような画面を表示するか計算すること」であり、以下のような処理は画面構造の計算処理には該当しない

- DOM要素のメソッドを呼ぶ
- APIへ通信する
- タイマーを開始する
- イベントリスナーを登録する
- ブラウザのタイトルを書き換える
- 外部ライブラリと同期する

このように、コンポーネントの外側へ作用する処理を「副作用」と呼ぶ

※基本の「表示される画面の構造を計算する処理」のみを行っている例

```
function Example({ name }: { name: string }) {
  return <p>{name}</p>;
}
```

## useEffectの基本的な構造

```
useEffect(実行する関数, 依存配列);
```

意味するところはReactに対する「初回表示後と、前回のレンダーから依存配列に含まれる値のどれかが変化したときに、第1引数の関数を実行せよ」という指示

※useEffect内でPropsやStateなどを参照している場合、原則として依存配列にも指定する必要あり

## return () => { ... } の意味

Reactに対して「クリーンアップ関数」を渡しているということ(クリーンアップ関数は主に以下のタイミングで実行される)

- コンポーネントが画面から削除される直前
- 依存値が変化し、次のEffectを実行する前
- 開発環境のStrict Modeによる動作確認時

### クリーンアップ関数で実行されがちな処理の典型例

- 登録されたタイマーの削除(当然画面構造の計算処理ではない)

```
useEffect(() => {
  const timerId = setInterval(...);

  return () => {
    clearInterval(timerId);
  };
}, []);
```

- 登録されたイベントリスナーの削除(こちらも当然画面構造の計算処理ではない)

```
useEffect(() => {
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## 避けるべき書き方(useEffectを使わずにDOM要素を変更)

```
function ConfirmationDialog({ open }: ConfirmationDialogProps) {
  if (open) {
    dialogRef.current?.showModal();
  }

  return <dialog ref={dialogRef}>...</dialog>;
}
```

Reactのレンダー処理は表示内容を計算するための処理であり、途中で中断されたり、再実行されたり、結果が破棄されたりする可能性がある。<br>
その中でDOMを直接変更すると、Reactが採用しなかったレンダーでもブラウザの状態だけが変更される可能性が生じる。<br>
useEffectを使うことにより、Reactがレンダー結果を実際に採用してDOMへ反映した後に実行されるため、DOM操作を安全に行える。

## 必ずコンポーネントの最上位で呼ぶ

useEffect、useState、useRef、useId などはHooksと呼ばれ、コンポーネントの最上位で呼ぶ必要がある。即ち、以下のように条件分岐やループの中では呼ぶことができない。

```
if (open) {
  useEffect(() => {
    // 不可
  }, []);
}

for (...) {
  useEffect(() => {
    // 不可
  }, []);
}
```

## React側に含まれるものの代表

- Props
- State
- Context
- PropsやStateから計算した値
- それらを使って返すJSX
- ReactがJSXをもとに構築・更新する画面構造

## React側に含まれないものの代表

- ブラウザのDOM API
- localStorage
- sessionStorage
- window や document
- タイマー
- WebSocket
- HTTP通信
- ブラウザの位置情報API
- React以外のUIライブラリ
- 動画・音声プレイヤー
- サーバーとの接続状態
