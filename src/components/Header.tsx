"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/constants";
import { BUCKET_URL, GITHUB_URL } from "@/constants/social";
import { useScrollToSection } from "@/hooks";
import { CloseIcon, GitHubIcon, MenuIcon } from "./ui/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollToSection();

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b-2 border-teal-300 z-50 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="flex items-center"
            aria-label="ホームページに移動"
          >
            <img
              src={`${BUCKET_URL}/icon.webp`}
              alt="Portfolio Icon"
              width={40}
              height={40}
              className="drop-shadow-lg"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-teal-600 font-bold transition-all duration-300 transform hover:scale-110"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-500 border-2 border-gray-300 rounded-2xl flex items-center justify-center text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="GitHubプロフィールを開く"
            >
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center md:hidden border-2 border-gray-300 text-black rounded-2xl hover:bg-gray-200 transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t-2 rounded-b-2xl">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
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
