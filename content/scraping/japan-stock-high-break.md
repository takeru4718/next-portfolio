---
title: 新高値ブレイク投資銘柄取得ツール
description: 新しく52週高値を更新する銘柄を取得し，CSV出力・LINE通知を行うPythonベースのスクレイピングツール。
tech:
  - Python
  - BeautiufulSoup
  - LINE API
image: /images/japan-stock-high-break.png
---

![新高値ブレイク投資銘柄取得ツール](/images/japan-stock-high-break.png)

## 概要

このツールは Python を用いて [株探](https://kabutan.jp) から銘柄データをスクレイピングし、  
条件に合致する新高値銘柄を抽出します。

### 1. データ取得
- **BeautifulSoup** を使用して株探の「52週高値」ページをスクレイピング。
- **PER（株価収益率）** と **PBR（株価純資産倍率）** を解析し、以下の条件でフィルタリング。  
  - PER 18倍未満  
  - PBR 2倍未満  

### 2. 差分判定
- 取得した銘柄リストを **CSVファイル** に保存。
- 翌日実行時に、前日のCSVと比較して**新規高値銘柄のみを抽出**。

### 3. LINE通知機能
- **LINE Messaging API** を利用し、新規高値銘柄や売買シグナルをユーザーに通知。
- `.env` ファイルで管理する **チャネルアクセストークン** と **ユーザーID** を使用し、安全に送信。

### 4. 売買シミュレーション
- `buy.py` と `benefit.py` で過去データを用いた購入タイミング・利益計算が可能。
- `sell.py` で売り時の判定をサポート。

---

## 技術構成

- **言語**: Python 3.x
- **主要ライブラリ**: requests, BeautifulSoup4, python-dotenv
- **外部サービス**: 株探（スクレイピング対象）, LINE Messaging API
- **補助ツール**: ngrok（ローカルサーバー外部公開用）