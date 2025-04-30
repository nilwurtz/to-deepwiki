# 💻 使用方法

To Deepwiki拡張機能は非常にシンプルで使いやすいです。インストールさえしていれば、特別な設定や操作は必要ありません。

## 基本的な使い方

1. インストール後、GitHubの任意のリポジトリページにアクセスします
2. リポジトリページのナビゲーションバーに「Deepwiki」リンクが自動的に追加されます
3. このリンクをクリックすると、対応するDeepwikiページ（`https://deepwiki.com/user/repo`）が新しいタブで開きます

## 動作の仕組み

この拡張機能は以下のように動作します：

1. GitHubのリポジトリページ（`https://github.com/*/*`のパターンにマッチするURL）を検出します
2. ページのURLからユーザー名（`user`）とリポジトリ名（`repo`）を抽出します
3. それらの情報を使用して対応するDeepwikiのURL（`https://deepwiki.com/user/repo`）を生成します
4. GitHubのナビゲーションバーに「Deepwiki」というテキストを持つリンクを追加します

## 制限事項

- この拡張機能はGitHubのリポジトリページでのみ動作します（例：`https://github.com/username/repository`）
- Issues、Pull Requests、Actions、Discussionsなどの他のGitHubページではDeepwikiリンクは追加されません
- プライベートリポジトリに対しても同様に動作しますが、対応するDeepwikiページがアクセス可能かどうかはDeepwikiの設定によります

## ヒント

- Deepwikiリンクは新しいタブで開かれるため、GitHubでの作業を中断することなくドキュメントを参照できます
- GitHubのUIが変更された場合、「ナビゲーションバーが見つかりません」というエラーが発生する可能性があります。その場合は[新しいIssue](https://github.com/nilwurtz/to-deepwiki/issues)を作成して報告してください

[メインページに戻る](../../README.ja.md)
