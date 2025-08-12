---
title: 天気情報の収集ツール
description: 都市名を入力すると気温と天気を表示．
tech:
  - React
  - Typescript
image: /images/weather-app.png
---

![天気情報収集ツールのスクリーンショット](/images/weather-app.png)

## 概要

都市名を入力すると、現在の気温と天気を表示するWebアプリです。  
シンプルなUIで、知りたい都市の天候をすぐに確認できます。

👉 **[アプリを試す](https://weather-app-beta-tan-88.vercel.app/)**

## 詳細

このアプリは「はじめてつくるReactアプリ with TypeScript」という本を参考に作成しました。  
WeatherAPIから取得したJSONデータを整形し、視覚的に分かりやすく表示するようにしています。  
UIはReact + TypeScriptで実装し、API通信はfetch関数を利用しています。
