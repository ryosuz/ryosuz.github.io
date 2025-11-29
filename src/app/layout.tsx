import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Ryosuz",
  description: "エンジニアRyosuzのポートフォリオサイト",
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
    description: "エンジニアRyosuzのポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
    url: "https://portfolio.ryosuz.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Ryosuz",
    description: "エンジニアRyosuzのポートフォリオサイト",
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
