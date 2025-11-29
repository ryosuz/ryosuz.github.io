export const NAV_ITEMS = [
  { label: "ホーム", href: "#home" },
  { label: "About this site", href: "#about" },
  { label: "スキル", href: "#skills" },
  { label: "プロジェクト", href: "#projects" },
  { label: "経歴", href: "#experience" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
