export default function Projects() {
  const projects = [
    {
      title: "Eコマースプラットフォーム",
      description:
        "ReactとNode.jsを使用したフルスタックのEコマースサイト。決済機能、在庫管理、ユーザー認証を実装。",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "タスク管理アプリ",
      description:
        "チームコラボレーション機能付きのタスク管理アプリケーション。リアルタイム更新とドラッグ＆ドロップ機能。",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Socket.io",
        "Tailwind CSS",
      ],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "ブログプラットフォーム",
      description:
        "Markdown対応のブログプラットフォーム。SSGによる高速表示とSEO最適化。",
      technologies: ["Next.js", "TypeScript", "MDX", "Vercel", "RSS"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "天気アプリ",
      description:
        "現在の天気と週間予報を表示するモバイルファーストな天気アプリケーション。",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeather API",
        "PWA",
        "Service Worker",
      ],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "ポートフォリオサイト",
      description:
        "モダンでレスポンシブなポートフォリオサイト。アニメーションと最適化されたパフォーマンス。",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "データダッシュボード",
      description:
        "リアルタイムデータ可視化ダッシュボード。インタラクティブなグラフと詳細な分析機能。",
      technologies: ["React", "D3.js", "Express", "MongoDB", "WebSocket"],
      image: "/api/placeholder/400/250",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            実務での経験や個人開発で作成した代表的なプロジェクトをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-teal-400 relative overflow-hidden ${
                project.featured ? "ring-2 ring-teal-500 ring-offset-2" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-teal-500 border-2 border-teal-300 text-white text-sm font-black px-4 py-2 rounded-full shadow-lg">
                  注目
                </div>
              )}

              <div className="mb-6">
                <div className="w-full h-48 bg-teal-200 border-2 border-teal-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-300 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-teal-700 font-bold text-lg">
                      プロジェクト画像
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black text-gray-800 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-teal-200 border border-teal-300 text-teal-800 font-semibold rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 shadow-lg"
                >
                  📁 GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center btn-primary text-sm"
                >
                  🚀 デモを見る
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📂 すべてのプロジェクトを見る
          </a>
        </div>
      </div>
    </section>
  );
}
