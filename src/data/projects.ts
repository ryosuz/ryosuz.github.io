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
		title: "Happy News Ear",
		description:
			"心温まるニュースを、あなたの耳に。ハッピーなニュースを要約、音声化してお届けするWEBアプリです。",
		detailedComment:
			"AWSをふんだんに駆使し、ニュース取得->ハッピー度判定->要約->音声化->配信という流れを自動化。ハッピーな記事だけが配信され、WEBアプリ上で音声として聞くことが出来ます。",
		technologies: [
			"AWS",
			"Step Functions",
			"Lambda",
			"Bedrock",
			"Polly",
			"Tanstack Start",
			"Tanstack Query",
			"Tailwind CSS",
		],
		screenshots: [
			"happy-news-ear/hne_top.webp",
			"happy-news-ear/hne_1.webp",
			"happy-news-ear/hne_2.webp",
		],
		image: "happy-news-ear/hne_top.webp",
		githubUrl: "https://github.com",
		liveUrl: "https://dev.happy-news-ear.ryosuz.com/",
		featured: true,
	},
	{
		title: "出品向け自動画像トリミングアプリ",
		description: "出品向けの画像を自動でトリミングするアプリです。",
		detailedComment:
			"オークションサイト等への出品のため、画像を特定のサイズにトリミングするアプリです。トリミングのほかに色合いの調整やウォーターマークの合成も行えます。バーコード画像を先頭に入れいることで自動でグルーピングを行えます。",
		technologies: ["React", "TypeScript"],
		screenshots: ["trimming/trimming_1.webp","trimming/trimming_2.webp", "trimming/trimming_3.webp", "trimming/trimming_4.webp"],
		image: "trimming/trimming_2.webp",
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
