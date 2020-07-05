# 使い方

- クエリパラメータ

```
?idol=35&event=142&rank=1,10,100,1000
```

|key | 内容| デフォルト値 |
|----| ---| --- |
| idol | アイドルのID。1～52のどれか。 | 35
| event | イベントのID。3周年なら142。 | 142
| rank  | 取得対象の順位。カンマ区切り指定。<br>指定する数は5個以内。<br>周年イベントの場合は1000より大きい順位のデータが無い。 | 1,10,50,80,100
| diff  | N時間前との差分。カンマ区切り指定。 | 1,6,24

- データは30分ごとに更新。データの取得元が集計中だったりすると画面反映が少し遅れることがある。

# OBSカスタムCSS参考
```.css
body {
    padding: 10px;
    border: solid 1px;
    border-radius: 5px;
    background-color: rgba(0,0,0, 0.7);
    margin: 0px auto;
    overflow: hidden;
}
```

# データ取得元
- [matsurihi.me](https://www.matsurihi.me/)
