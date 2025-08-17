---
title: CrowdWorks 新着案件スクレイパー
description: CrowdWorks の指定カテゴリの新着案件を取得し、CSV出力で差分管理するPythonスクレイピングツール。
tech:
  - Python
  - Selenium
  - BeautifulSoup
  - CSV
image: /images/crowdworks-scraper.png
---


![CrowdWorks 新着案件スクレイパー](/images/crowdworks-scraper.png)

## 概要

[GitHub リポジトリはこちら](https://github.com/takeru4718/crowdworks-new-jobs-scraper)

このツールは Python を用いて CrowdWorks から指定カテゴリの新着案件を取得し、
前回取得した案件と比較して新規案件のみを抽出・管理します。

### 1. データ取得
- Selenium を使用してページを自動で取得。

- BeautifulSoup で HTML を解析し、「新着」ラベル付き案件のみ抽出。

- 複数カテゴリURLに対応。

### 2. 差分判定
- 取得した案件IDを previous_jobs.csv に保存（比較用）。

- 新規案件のみ current_jobs.csv に出力。

- ターミナルに新着件数を表示。

### 3. CSV管理
- 前回データとの比較で新着案件を判定。

- 「新着」ラベルが外れた案件は自動で previous_jobs.csv から削除。

- CSV 形式で簡単に案件を管理可能。

---

## 技術構成

- **言語**: Python 3.x
- **主要ライブラリ**: selenium, webdriver-manager, beautifulsoup4, csv, os
- **外部サービス**: CrowdWorks（スクレイピング対象）
- **補助ツール**: ChromeDriver（Selenium用）