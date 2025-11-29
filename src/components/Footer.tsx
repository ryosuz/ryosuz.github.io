"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            <div className="flex space-x-4">
              <a
                href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-500 border-2 border-gray-300 rounded-2xl flex items-center justify-center text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="GitHubプロフィールを開く"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>GitHub</title>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border-2 border-gray-800 rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Twitterプロフィールを開く"
              >
                <span className="sr-only">X</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>X</title>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>トップに戻る</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
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
