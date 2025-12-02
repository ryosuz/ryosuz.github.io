# ポートフォリオサイト仕様・設計ドキュメント

## 1. 概要
- **サイト名**: RYOSUZ ポートフォリオ
- **目的**: フロントエンドエンジニアRyosuzの経歴・制作実績を紹介し、コンタクトを受け付ける。
- **構成**: 1ページ構成のランディング（`src/pages/index.astro`）。各セクションはAstroコンポーネントとして分離。

## 2. 技術スタック
- **フレームワーク**: Astro 5 + React 19（`@astrojs/react`）。
- **スタイリング**: Tailwind CSS 4 + 独自ユーティリティクラス（`bg-cosmic-latte`など）。
- **UI/アイコン**: `lucide-react`、カスタムSectionHeaderコンポーネント。
- **フォーム保護**: `react-google-recaptcha` によるreCAPTCHA v2。
- **ビルド/パッケージ**: pnpm、BiomeによるLint/Format。

## 3. 環境変数 (`src/env.d.ts`)
| 変数 | 用途 |
| --- | --- |
| `PUBLIC_BUCKET_URL` | 画像アセット（Hero背景・ヘッダーロゴなど）のホスティングURL |
| `PUBLIC_GITHUB_URL` | SNSリンク（未使用時も将来用） |
| `PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2サイトキー |
| `PUBLIC_POST_URL` | お問い合わせフォーム送信先エンドポイント |

## 4. ページ構成
1. **Hero (`Hero.astro`)**: 背景画像と肩書き・リード文。スクロール誘導ボタンあり。
2. **About (`About.astro`)**: 自己紹介とサイトの目的。
3. **Skills (`Skills.astro`)**: `src/data/skills.ts`をデータソースにカテゴリ別スキルとOther Technologiesを表示。
4. **Works (`Works.astro`)**: `src/data/projects.ts`をソートし代表プロジェクトをカード表示。
5. **Experience (`Experience.astro`)**: `src/data/experiences.ts`を基に職務経歴・学歴タイムラインを2カラムで表示。
6. **Contact (`Contact.astro`)**: 連絡先情報と React ベースの `ContactForm`。
7. **Header/Footer**: 固定ナビゲーション（`Header.astro`）、サイト全体の締め（`Footer.astro`）。

## 5. 主要コンポーネント
- **Layout (`src/layouts/Layout.astro`)**: `<head>` メタ、グローバルスタイル、フォント設定。
- **SectionHeader (`src/components/SectionHeader.astro`)**: タイトル＋任意説明文。`align` プロップで整列制御。
- **ProjectCard (`src/components/project-card.tsx`)**: Worksセクションで使用。`client:visible`で必要時にhydration。
- **ContactForm (`src/components/contact-form.tsx`)**: React + reCAPTCHA。フォームstate管理、送信ロジック、バリデーション。

## 6. データソース
- `src/data/skills.ts`: スキルカテゴリとその他技術。
- `src/data/projects.ts`: プロジェクト情報（`featured`フラグ、説明、リンク、利用技術）。
- `src/data/experiences.ts`: 職歴（詳細説明・使用技術）と学歴。
- `src/data/skills.ts` / `experiences.ts` などの型は `src/types/index.ts` で定義。

## 7. フォーム・セキュリティ設計
- **入力項目**: 名前/メール/件名/本文（1000字制限）。
- **reCAPTCHA v2**: `client:only="react"` によりSSR対象外。`onChange`でトークン取得、`FormData`に付与。
- **送信**: `PUBLIC_POST_URL` に `fetch` POST。失敗時はエラーメッセージ表示、成功時はサンクス表示。
- **UI制御**: reCAPTCHA未完了や送信中はボタン無効化。

## 8. デザイン & UX ポリシー
- **カラーパレット**: `cosmic-latte`系のベージュと`ink`系の濃紺を基調。背景／枠線／テキスト変化で階層表現。
- **レイアウト**: `max-w-5xl` を共通幅に、セクションごとに`py-24`で余白を確保。`scroll-mt-*`でスムーズスクロール。
- **アニメーション**: クラス `slide-up`, `slide-in-left/right`, `animate-fade-blur-in`, `animate-bounce` などでフェード・トランジションを演出。
- **レスポンシブ**: ナビゲーションはモバイルでハンバーガー、カード／グリッドは `md:grid-cols-*` で切り替え。
- **アクセシビリティ**: セクションに `aria-label`、ボタン・リンクに `hover/focus` スタイル。reCAPTCHAエラーはテキストで明示。

## 9. デプロイ/CI
- **GitHub Actions**: `.github/workflows/deploy.yml` で `pnpm install`, `astro build`, `astro deploy`。
- **Secrets**: `PUBLIC_BUCKET_URL`, `PUBLIC_GITHUB_URL`, `PUBLIC_RECAPTCHA_SITE_KEY`, `PUBLIC_POST_URL` をCIに注入。
- **動作環境**: Node 22（Astro推奨）想定。`pnpm-lock.yaml` により依存固定。

## 10. 今後の拡張余地
- APIレスポンスを受け取るサーバーレス関数の導入。
- `react-google-recaptcha` のサーバー検証エンドポイント実装（現状クライアント送信のみ）。
- `PUBLIC_GITHUB_URL` など未使用変数の活用（SNS連携強化）。
