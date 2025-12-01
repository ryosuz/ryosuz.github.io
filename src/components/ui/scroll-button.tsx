"use client";

import { useScrollToSection } from "@/hooks";
import { ArrowDownIcon } from "./icons";

export default function ScrollButton() {
  const scrollToSection = useScrollToSection();

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-animation">
      <button
        type="button"
        onClick={() => scrollToSection("#about")}
        className="text-white duration-300"
        aria-label="About this siteセクションへスクロール"
      >
        <ArrowDownIcon className="w-8 h-8 drop-shadow-lg" />
      </button>
    </div>
  );
}
