import type { Project } from "@/types"

export const projects: Project[] = [
	{
		title: "ポートフォリオ",
		description: "ご覧いただいているこのポートフォリオサイトです。",
		detailedComment:
			"AstroとReactを活用して、高速なポートフォリオサイトを開発。お問い合わせはバックエンドのAWS LambdaとSESを活用して対応しています。",
		technologies: [
			"Astro",
			"React",
			"Tailwind CSS",
			"GitHub pages",
			"Go",
			"AWS Lambda",
			"AWS SES",
			"CI/CD",
		],
		screenshots: [
			"portfolio/portfolio_hero.webp",
			"portfolio/portfolio_2.webp",
			"portfolio/portfolio_contact.webp",
			"portfolio/portfolio_4.webp",
		],
		image: "portfolio/portfolio_hero.webp",
		githubUrl: "https://github.com/ryosuz/ryosuz.github.io",
		// liveUrl: "https://portfolio.ryosuz.com",
		featured: true,
	},
	{
		title: "タスク管理アプリ",
		description:
			"チームコラボレーション機能付きのタスク管理アプリケーション。リアルタイム更新とドラッグ＆ドロップ機能。",
		detailedComment:
			"Next.jsとTypeScriptを活用して、タイプセーフなタスク管理アプリを開発。Socket.ioによるリアルタイム通信で、複数ユーザーによる同時編集を実現。ドラッグ＆ドロップ機能にはHTML5 Drag and Drop APIを使用し、直感的なUIを提供。PostgreSQLで複雑なタスク階層とユーザー権限を管理しています。",
		technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS"],
		screenshots: [
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
		],
		image: "/api/placeholder/400/250",
		githubUrl: "https://github.com",
		liveUrl: "https://example.com",
		featured: true,
	},
	{
		title: "ブログプラットフォーム",
		description: "Markdown対応のブログプラットフォーム。SSGによる高速表示とSEO最適化。",
		detailedComment:
			"MDXを活用したブログプラットフォームで、MarkdownにReactコンポーネントを埋め込める機能を実装。Next.jsのSSG機能を最大限活用し、ビルド時に静的HTMLを生成することでページ表示速度を大幅に向上。Vercelにデプロイし、CDNによるグローバル配信を実現。RSSフィード機能も追加し、読者への通知システムを構築。",
		technologies: ["Next.js", "TypeScript", "MDX", "Vercel", "RSS"],
		screenshots: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
		image: "/api/placeholder/400/250",
		githubUrl: "https://github.com",
		liveUrl: "https://example.com",
		featured: false,
	},
	{
		title: "天気アプリ",
		description: "現在の天気と週間予報を表示するモバイルファーストな天気アプリケーション。",
		detailedComment:
			"OpenWeather APIを利用して、世界中の天気情報をリアルタイムで取得するPWAアプリケーション。Service Workerを実装し、オフライン時でもキャッシュされた天気データを表示可能。モバイルファースト設計で、スマートフォンでの利用体験を最適化。位置情報サービスを活用し、現在位置の天気を自動取得。",
		technologies: ["React", "TypeScript", "OpenWeather API", "PWA", "Service Worker"],
		screenshots: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
		image: "/api/placeholder/400/250",
		githubUrl: "https://github.com",
		liveUrl: "https://example.com",
		featured: false,
	},
	{
		title: "ポートフォリオサイト",
		description:
			"モダンでレスポンシブなポートフォリオサイト。アニメーションと最適化されたパフォーマンス。",
		detailedComment:
			"Next.jsとTypeScriptで構築したパーソナルポートフォリオサイト。Framer Motionで滑らかなアニメーションを実装し、ユーザー体験を向上。Tailwind CSSでレスポンシブデザインを完璧に実現。Vercelにデプロイし、グローバルCDNによる高速配信を実現。SEO最適化も行い、検索エンジンからの発見性を向上。",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
		screenshots: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
		image: "/api/placeholder/400/250",
		githubUrl: "https://github.com",
		liveUrl: "https://example.com",
		featured: false,
	},
	{
		title: "データ可視化ダッシュボード",
		description:
			"リアルタイムデータ可視化ダッシュボード。インタラクティブなグラフと詳細な分析機能。",
		detailedComment:
			"D3.jsとReactを組み合わせたインタラクティブなデータ可視化ダッシュボード。WebSocketでリアルタイムデータを受信し、動的にグラフを更新。複数のチャートタイプ（折れ線、棒、円グラフ等）をサポートし、ユーザーがカスタマイズ可能なダッシュボードを提供。Expressサーバーでデータ処理とAPIエンドポイントを構築。",
		technologies: ["React", "D3.js", "Express", "MongoDB", "WebSocket"],
		screenshots: [
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
		],
		image: "/api/placeholder/400/250",
		githubUrl: "https://github.com",
		liveUrl: "https://example.com",
		featured: false,
	},
]
