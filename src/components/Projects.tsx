"use client";

import { useCallback, useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  detailedComment: string;
  technologies: string[];
  screenshots: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen, closeModal]);

  const projects: Project[] = [
    {
      title: "Eコマースプラットフォーム",
      description:
        "ReactとNode.jsを使用したフルスタックのEコマースサイト。決済機能、在庫管理、ユーザー認証を実装。",
      detailedComment:
        "このプロジェクトでは、フロントエンドのReactとバックエンドのNode.jsを連携させ、リアルタイムの在庫管理システムを構築しました。特に決済機能の実装ではStripe APIを活用し、セキュアなトランザクション処理を実現しました。ユーザー認証にはJWTを採用し、セッション管理を適切に行っています。",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
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
      title: "タスク管理アプリ",
      description:
        "チームコラボレーション機能付きのタスク管理アプリケーション。リアルタイム更新とドラッグ＆ドロップ機能。",
      detailedComment:
        "Next.jsとTypeScriptを活用して、タイプセーフなタスク管理アプリを開発。Socket.ioによるリアルタイム通信で、複数ユーザーによる同時編集を実現。ドラッグ＆ドロップ機能にはHTML5 Drag and Drop APIを使用し、直感的なUIを提供。PostgreSQLで複雑なタスク階層とユーザー権限を管理しています。",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Socket.io",
        "Tailwind CSS",
      ],
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
      description:
        "Markdown対応のブログプラットフォーム。SSGによる高速表示とSEO最適化。",
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
      description:
        "現在の天気と週間予報を表示するモバイルファーストな天気アプリケーション。",
      detailedComment:
        "OpenWeather APIを利用して、世界中の天気情報をリアルタイムで取得するPWAアプリケーション。Service Workerを実装し、オフライン時でもキャッシュされた天気データを表示可能。モバイルファースト設計で、スマートフォンでの利用体験を最適化。位置情報サービスを活用し、現在位置の天気を自動取得。",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeather API",
        "PWA",
        "Service Worker",
      ],
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
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
      ],
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
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-mt-16">
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
            <button
              type="button"
              key={project.title}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-teal-400 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-left`}
              onClick={() => openModal(project)}
            >
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
            </button>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <button
              type="button"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  closeModal();
                }
              }}
              aria-label="閉じる"
            />
            <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Close button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="閉じる"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>閉じる</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-8">
                {/* Title */}
                <h2 className="text-3xl font-black text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>

                {/* Screenshots */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    スクリーンショット
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((_, index) => (
                      <div
                        key={`screenshot-${selectedProject.title}-${index}`}
                        className="bg-gray-100 rounded-2xl overflow-hidden"
                      >
                        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                          <p className="text-gray-500">
                            スクリーンショット {index + 1}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Comment */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    詳細説明
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {selectedProject.detailedComment}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    使用技術
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-200 border border-teal-300 text-teal-800 font-semibold rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center btn-primary"
                  >
                    📁 GitHub
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center btn-secondary"
                  >
                    🚀 デモを見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
