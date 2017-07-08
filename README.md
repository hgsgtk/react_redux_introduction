## React & Redux & Material UIでのアプリケーション開発
業務でReact & Reduxで書かれたアプリケーションのコンサルティングをする必要があり、
基本をキャッチアップするためのアプリケーション開発を行った。

* 教材URL
[React × Redux 初心者入門](http://www.hirooooo-lab.com/entry/development/react-redux-setup-environment)

### Day1 環境構築

* [React × Redux 初心者入門(1日目：環境構築編)](http://www.hirooooo-lab.com/entry/development/react-redux-setup-environment
)

教材URLの投稿日が2016年7月、私の作業開始日は2017年7月で1年間空いており、
バージョンも大きく変わっていました。

この変化により、webpack.config.jsの書き方に違いが在りコンパイルエラーが発生しました。  
コンパイルエラーに対する対応は、下記のIssue記録を参照になりますが、
解決にかなりの時間を要しそうだったので、途中からバージョンを合わせてinstallし直す方法に切り替えました。  

* [Issue記録：発生した課題と試行錯誤](https://github.com/KAZUKI1994/react_webpack_modify/issues?q=is%3Aclosed)

#### 実施した対応

* パッケージインストール時のバージョン指定
筆者のpackage.jsonのバージョンに合わせて、```npm install```でバージョンを指定しました。

```
$ npm install --save react@15.2.1 react-dom@15.2.1 redux@3.5.2 react-redux@4.4.5
$ npm install --save-dev webpack@1.13.1 webpack-dev-server@1.14.1 babel-cli@6.10.1 babel-core@6.10.4 babel-loader@6.2.4 react-hot-loader@1.3.0 eslint@3.0.1 eslint-loader@1.4.1 eslint-plugin-react@5.2.2 babel-eslint@6.1.2 file-loader@6.2.4 babel-preset-es2015@6.9.0 babel-preset-react@6.11.1 css-loader@0.23.1 style-loader@0.13.1
```

* asyncが入っていないと怒られたのでinstall

```
$ npm install --save-dev async
```

上記2点の対応でDay1を完了しました。


### Day2 Material UI

* [React × Redux 初心者入門(2日目：Material-UIを実装する)](http://www.hirooooo-lab.com/entry/development/react-redux-materialui)

#### 発生したエラー

最新のmaterial-uiが求めているreactのバージョンが入っていない。  
本アプリケーションは15.2.1のため必要条件を満たさない。

```
npm list | grep material                                                          [~/Documents/sourcecode/private/web/react_redux_introduction]
├─┬ material-ui@0.18.6
npm ERR! peer dep missing: react@^15.4.0, required by material-ui@0.18.6
npm ERR! peer dep missing: react@^15.4.0-0, required by react-tap-event-plugin@2.0.1
npm ERR! peer dep missing: react-dom@^15.4.0, required by material-ui@0.18.6
npm ERR! peer dep missing: react-dom@^15.4.0-0, required by react-tap-event-plugin@2.0.1
```

バージョンダウン。
※react-tap-event-pluginはReactのバージョン別に推奨バージョンの明記が、公式githubにあり。
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)

```
$ npm uninstall --save material-ui react-tap-event-plugin
$ npm install --save material-ui@0.18.0 react-tap-event-plugin@1.8.0
```

### Day3 react-router-reduxでルーティングの実装

* [React × Redux 初心者入門(3日目：react-router-reduxでルーティングを実装する)](http://www.hirooooo-lab.com/entry/development/react-router-redux)
