"use client";

import { scrollToTop } from "@/hooks";
import { ArrowUpIcon, SocialLinks } from "./ui";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-500 text-white py-12">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-black mb-4 bg-white border-l-10 border-teal-700 text-teal-950 pl-4 rounded-r-full">
              Portfolio
            </h3>
            <p className="text-white mb-4 font-medium">
              フロントエンドエンジニアとして、モダンでユーザーフレンドリーなWebアプリケーション開発を得意としています
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="text-xl font-black mb-4 bg-white border-l-10 border-teal-700 text-teal-950 pl-4 rounded-r-full">
              クイックリンク
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300 transform hover:translate-x-2 inline-block"
                >
                  🏠 ホーム
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300 transform hover:translate-x-2 inline-block"
                >
                  💻 スキル
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300 transform hover:translate-x-2 inline-block"
                >
                  🎨 プロジェクト
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300 transform hover:translate-x-2 inline-block"
                >
                  💼 経歴
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300 transform hover:translate-x-2 inline-block"
                >
                  📧 お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-4 bg-white border-l-10 border-teal-700 text-teal-950 pl-4 rounded-r-full">
              連絡先
            </h3>
            <div className="space-y-3">
              <p className="text-white font-medium">
                📧 Email:{" "}
                <a
                  href="mailto:contact@example.com"
                  className="text-white hover:text-cyan-600 font-bold transition-all duration-300"
                >
                  contact@example.com
                </a>
              </p>
              <p className="text-white font-medium">📍 Location: 愛知, 日本</p>
            </div>
          </div>
        </div>

        {/* Top Button */}
        <div className="mt-8 pt-8 border-t border-white/30">
          <div className="text-center mb-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-teal-300"
              aria-label="ページのトップに戻る"
            >
              <ArrowUpIcon className="w-5 h-5" />
              <span>トップに戻る</span>
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-medium">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
