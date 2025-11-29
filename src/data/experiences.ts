import type { Education, Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "シニアフロントエンドエンジニア",
    company: "株式会社ロークス",
    location: "愛知",
    period: "2021年5月 - 現在",
    description: [
      "買取業界にどっぷりと浸かることになる",
      "React/Next.jsを使用した自社向け業務管理システムの開発",
      "AWSのSQS,S3等のサービスを用いたバックエンドシステムの構築",
      "買取情報入力から売上管理、オークション出品情報作成までの一連の業務をシステム化",
      "企業向け宅配弁当会社の業務効率化や顧客管理システム構築にも携わる",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "AWS",
      "python",
      "VBA",
      "Excel",
      "sqlite",
    ],
  },
  {
    title: "フロントエンドエンジニア",
    company: "株式会社MST",
    location: "愛知",
    period: "2020年4月 - 2021年4月",
    description: [
      "買取業界のオークション出品作業用サイトのフロントエンド開発",
      "商品ジャンル詳細化による出品情報精度向上",
      "画像自動トリミングシステムの構築",
      "初めてのReactとの出会い",
    ],
    technologies: ["PHP", "React", "TypeScript"],
  },
  {
    title: "エンジニアの卵",
    company: "株式会社インビリティー",
    location: "愛知",
    period: "2015年4月 - 2020年4月",
    description: [
      "就職そうそうに一人でのスマホゲーム開発プロジェクトに配属",
      "大手自動車企業に出向し4年間、Java, COBOLを用いたバッチ処理業務に携わる",
      "上流工程も経験し、詳細設計、基本設計等の設計業務も担当",
      "その後自社へ戻り、AIを用いた工場での危険行動検知システムのPMを経験",
    ],
    technologies: ["cocos2d-x", "Java", "C++", "C#", "Oracle", "PHP"],
  },
];

export const education: Education[] = [
  {
    degree: "情報科学部情報科学科",
    school: "愛知県立大学",
    location: "愛知",
    period: "2010年4月 - 2014年3月",
    description: "メディア情報専攻",
  },
];
