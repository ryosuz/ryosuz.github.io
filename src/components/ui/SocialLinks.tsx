import { GITHUB_URL } from "@/constants/social";
import { GitHubIcon, XIcon } from "./icons";

interface SocialLinksProps {
  size?: "sm" | "md";
  showX?: boolean;
}

export function SocialLinks({ size = "md", showX = true }: SocialLinksProps) {
  const sizeClasses = size === "sm" ? "w-10 h-10" : "w-12 h-12";
  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";

  return (
    <div className="flex space-x-4">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses} bg-gray-500 border-2 border-gray-300 rounded-2xl flex items-center justify-center text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg`}
        aria-label="GitHubプロフィールを開く"
      >
        <span className="sr-only">GitHub</span>
        <GitHubIcon className={iconSize} />
      </a>
      {showX && (
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses} bg-black border-2 border-gray-800 rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 shadow-lg`}
          aria-label="Xプロフィールを開く"
        >
          <span className="sr-only">X</span>
          <XIcon className={iconSize} />
        </a>
      )}
    </div>
  );
}
