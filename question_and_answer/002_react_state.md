# useStateを使っている場合の挙動

例えば

```
function App() {
  const [cnt, setCnt] = useState<Number>(0);

  ...

  return (
    <ScreenLayout>
    ...
    </ScreenLayout>
  );
}
```

のように書いている部分がある時、最初の描画ではcntに0が与えられる。<br>
setCnt(x)が呼ばれるとcntの値がxに書き換わり<br>
Reactが状態の更新を記録して画面を再度描画する。即ち、<br>
cntを参照して値が決まるローカル変数valを同時に持つ実装をしている場合、<br>
valの値も評価し直されたうえでApp()は再計算された返り値を返す。
