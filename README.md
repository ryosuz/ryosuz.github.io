# RYOSUZ ポートフォリオ

Astro + React で構築したワンページ構成のポートフォリオサイトです。自己紹介や実績、スキル、問い合わせフォームを掲載し、訪問者が素早く情報へアクセスできるようにデザインされています。

サイト全体の仕様や設計方針は [`docs/SPECIFICATION.md`](./docs/SPECIFICATION.md) にまとめています。詳細はそちらを参照してください。

## 技術スタック
- Astro 5 / React 19
- Tailwind CSS 4 + カスタムユーティリティ
- pnpm / Biome / GitHub Actions
- Google reCAPTCHA v2（React実装）

## 開発環境の準備
1. 依存関係をインストール
   ```sh
   pnpm install
   ```
2. ローカル開発サーバーを起動
   ```sh
   pnpm dev
   ```

## 利用可能なスクリプト
| コマンド | 目的 |
| --- | --- |
| `pnpm dev` | 開発サーバーを起動（http://localhost:4321） |
| `pnpm build` | 本番ビルドを `dist/` に生成 |
| `pnpm preview` | ビルド成果物のローカル確認 |
| `pnpm lint` / `pnpm lint:fix` | BiomeでLintチェック／修正 |
| `pnpm format` | Biomeで整形 |

## デプロイ
GitHub Actions（`.github/workflows/deploy.yml`）で `pnpm install → pnpm build → astro deploy` を実行します。必要な公開環境変数はリポジトリSecretsに設定してください。

## ドキュメント
より詳しい仕様やUI/UX設計、データ構造については [`docs/SPECIFICATION.md`](./docs/SPECIFICATION.md) を参照してください。
