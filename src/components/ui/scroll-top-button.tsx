"use client";

import { scrollToTop } from "@/hooks/useScrollToSection";
import { ArrowUpIcon } from "./icons";

export default function ScrollTopButton() {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center space-x-2 bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-teal-300"
      aria-label="ページのトップに戻る"
    >
      <ArrowUpIcon className="w-5 h-5" />
      <span>トップに戻る</span>
    </button>
  );
}
