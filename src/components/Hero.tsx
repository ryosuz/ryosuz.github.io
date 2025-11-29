"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-teal-500 scroll-mt-16"
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 drop-shadow-lg">
            <span>RYOSUZ LAB!</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md font-medium">
            Ryosuz engineer portfolio
          </p>

          <div className="mb-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_BUCKET_URL}/main.png`}
              alt="Main visual"
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-2xl max-h-80 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-animation">
        <button
          type="button"
          onClick={() => scrollToSection("#about")}
          className="text-white duration-300"
          aria-label="About this siteセクションへスクロール"
        >
          <svg
            className="w-8 h-8 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>下にスクロール</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
