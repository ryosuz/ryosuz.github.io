"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ホーム", href: "#home" },
    { label: "About this site", href: "#about" },
    { label: "スキル", href: "#skills" },
    { label: "プロジェクト", href: "#projects" },
    { label: "経歴", href: "#experience" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b-2 border-teal-300 z-50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center"
            aria-label="ホームページに移動"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BUCKET_URL}/icon.webp`}
              alt="Portfolio Icon"
              width={40}
              height={40}
              className="drop-shadow-lg"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-teal-600 font-bold transition-all duration-300 transform hover:scale-110"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-500 border-2 border-gray-300 rounded-2xl flex items-center justify-center text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="GitHubプロフィールを開く"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center md:hidden border-2 border-gray-300 text-black rounded-2xl hover:bg-gray-200 transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>メニュー</title>
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t-2 rounded-b-2xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-teal-900 font-bold hover:bg-teal-100 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
