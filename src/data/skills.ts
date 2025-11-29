import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "フロントエンド",
    bgColor: "bg-teal-400",
    borderColor: "border-teal-300",
    skills: [
      { name: "React", level: 5, icon: "⚛️" },
      { name: "Next.js", level: 4, icon: "▲" },
      { name: "TypeScript", level: 4, icon: "📘" },
      { name: "Tailwind CSS", level: 4, icon: "🎨" },
      { name: "Svelte", level: 2, icon: "📜" },
    ],
  },
  {
    title: "バックエンド",
    bgColor: "bg-blue-300",
    borderColor: "border-blue-200",
    skills: [
      { name: "Node.js", level: 3, icon: "🟢" },
      { name: "python", level: 3, icon: "🐍" },
      { name: "Express", level: 2, icon: "🚂" },
      { name: "sqlite", level: 3, icon: "🗄️" },
      { name: "postgreSQL", level: 2, icon: "🗄️" },
    ],
  },
  {
    title: "ツール・その他",
    bgColor: "bg-cyan-400",
    borderColor: "border-cyan-300",
    skills: [
      { name: "Vercel", level: 4, icon: "▲" },
      { name: "Cloudflare", level: 3, icon: "☁️" },
      { name: "AWS", level: 1, icon: "☁️" },
      { name: "Git/GitHub", level: 4, icon: "📦" },
    ],
  },
];

export const otherTechnologies = [
  "HTML5",
  "CSS3",
  "Sass",
  "Styled Components",
  "Redux",
  "Zustand",
  "Valibot",
  "Drizzle ORM",
  "React Query",
  "Webpack",
  "Vite",
  "GraphQL",
  "REST API",
  "VBA",
  "CI/CD",
];
