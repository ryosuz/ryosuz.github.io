import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | フロントエンドエンジニア",
  description:
    "モダンでユーザーフレンドリーなWebアプリケーションを開発するフロントエンドエンジニアのポートフォリオサイト。React, Next.js, TypeScriptを得意としています。",
  keywords: [
    "フロントエンドエンジニア",
    "Web開発",
    "React",
    "Next.js",
    "TypeScript",
    "ポートフォリオ",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Ryosuz",
    description:
      "モダンでユーザーフレンドリーなWebアプリケーションを開発するフロントエンドエンジニアのポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
    url: "https://portfolio.ryosuz.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | フロントエンドエンジニア",
    description:
      "モダンでユーザーフレンドリーなWebアプリケーションを開発するフロントエンドエンジニアのポートフォリオサイト",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${mplusRounded.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
