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
			"happy-news-ear/hne_3.webp",
		],
		image: "happy-news-ear/hne_top.webp",
		githubUrl: "https://github.com/ryosuz/happy-news-ear",
		liveUrl: "https://happy-news-ear.ryosuz.com/",
		featured: true,
	},
	{
		title: "社内向け売上管理システム",
		description: "営業結果、売上データ、出品情報、相場等の管理を行えます。",
		detailedComment:
			"社内向けの管理システムです。社内業務のことはここに集約し、売上管理から日々の営業日報、出品作業やコールセンターのヒヤリングシート作成を行えます。出品データの保存にはS3, アップロード用データ生成にはLambdaやSQSを使用し、完成をまたなくても別作業に移れるようにしています。",
		technologies: ["Next.js", "Lambda", "SQS", "Vercel", "TypeScript", "Tailwind CSS", "CI/CD"],
		screenshots: ["ms/ms_1.webp", "ms/ms_2.webp", "ms/ms_3.webp"],
		image: "ms/ms_1.webp",
		featured: false,
	},
	{
		title: "出品向け自動画像トリミングアプリ",
		description: "出品向けの画像を自動でトリミングするアプリです。",
		detailedComment:
			"オークションサイト等への出品のため、画像を特定のサイズにトリミングするアプリです。トリミングのほかに色合いの調整やウォーターマークの合成も行えます。バーコード画像を先頭に入れいることで自動でグルーピングを行えます。",
		technologies: ["React", "TypeScript"],
		screenshots: [
			"trimming/trimming_1.webp",
			"trimming/trimming_2.webp",
			"trimming/trimming_3.webp",
			"trimming/trimming_4.webp",
		],
		image: "trimming/trimming_2.webp",
		featured: false,
	},
]
