# 🔧 開発方法

To Deepwiki拡張機能は[Plasmo](https://docs.plasmo.com/)フレームワークを使用して構築されています。このドキュメントでは、開発環境のセットアップと拡張機能の開発方法について説明します。

## 前提条件

開発を始める前に、以下のソフトウェアがインストールされていることを確認してください：

- [Node.js](https://nodejs.org/) (v18以降)
- [pnpm](https://pnpm.io/) (推奨) またはnpm

## 開発環境のセットアップ

以下の手順で開発環境をセットアップします：

```bash
# リポジトリをクローン
git clone https://github.com/nilwurtz/to-deepwiki.git
cd to-deepwiki

# 依存関係をインストール
pnpm install
```

## 開発サーバーの起動

```bash
pnpm dev
```

このコマンドを実行すると、開発サーバーが起動し、拡張機能が`build/chrome-mv3-dev`ディレクトリにビルドされます。

開発ビルドをロードするには：
1. Chromeを開き、`chrome://extensions/`に移動します
2. 「デベロッパーモード」を有効にします
3. 「パッケージ化されていない拡張機能を読み込む」をクリックし、`build/chrome-mv3-dev`フォルダを選択します

## コードの構造

主要なコードファイルとその役割：

- `contents/github.tsx`: GitHubページに埋め込まれるコンテンツスクリプト。Deepwikiリンクを追加するメイン機能を実装
- `package.json`: プロジェクトの依存関係と設定
- `tsconfig.json`: TypeScriptの設定
- `biome.json`: Biomeのコード整形設定

## 実装の詳細

拡張機能の主な実装は`contents/github.tsx`ファイルにあります：

1. `PlasmoCSConfig`を使用して、GitHubのリポジトリページ（`https://github.com/*/*`）のみでスクリプトを実行するように設定
2. ページが完全に読み込まれたときに実行される`load`イベントリスナーを設定
3. 現在のURLからユーザー名とリポジトリ名を抽出
4. 該当する情報を使用してDeepwikiのURLを生成
5. GitHubのナビゲーションバーを検索し、新しいリンク要素を作成して追加

## 本番用ビルド

```bash
pnpm build
```

このコマンドは`build/chrome-mv3-prod`に本番用ビルドを作成します。

## パッケージング

```bash
pnpm package
```

このコマンドは`build`ディレクトリに配布用のZIPファイルを作成します。

## コードの整形

```bash
pnpm format
```

このコマンドはBiomeを使用してコードを整形します。

## ヒント

- `contents/github.tsx`を編集すると、開発サーバーは自動的に更新されますが、Chromeでは拡張機能を手動で更新（更新ボタンをクリック）する必要があります
- GitHubのUI構造が変更された場合は、ナビゲーションバーのセレクタ（`nav[role='navigation']`）を更新する必要があるかもしれません
- Plasmoフレームワークの詳細については、[公式ドキュメント](https://docs.plasmo.com/)を参照してください

[メインページに戻る](../../README.ja.md)
