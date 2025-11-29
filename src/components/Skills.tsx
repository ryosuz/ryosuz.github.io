export default function Skills() {
  const getStarRating = (level: number) => {
    if (level >= 80) return 5;
    if (level >= 60) return 4;
    if (level >= 40) return 3;
    if (level >= 20) return 2;
    return 1;
  };

  const skillCategories = [
    {
      title: "フロントエンド",
      bgColor: "bg-teal-400",
      borderColor: "border-teal-300",
      skills: [
        { name: "React", level: 90, icon: "⚛️", color: "bg-cyan-400" },
        { name: "Next.js", level: 85, icon: "▲", color: "bg-gray-800" },
        { name: "TypeScript", level: 80, icon: "📘", color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 85, icon: "🎨", color: "bg-teal-400" },
        { name: "Svelte", level: 50, icon: "📜", color: "bg-yellow-400" },
      ],
    },
    {
      title: "バックエンド",
      bgColor: "bg-blue-300",
      borderColor: "border-blue-200",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢", color: "bg-green-500" },
        { name: "python", level: 50, icon: "🐍", color: "bg-green-600" },
        { name: "Express", level: 40, icon: "🚂", color: "bg-gray-700" },
        { name: "sqlite", level: 60, icon: "🗄️", color: "bg-blue-600" },
      ],
    },
    {
      title: "ツール・その他",
      bgColor: "bg-cyan-400",
      borderColor: "border-cyan-300",
      skills: [
        { name: "Vercel", level: 80, icon: "▲", color: "bg-blue-400" },
        { name: "Cloudflare", level: 65, icon: "☁️", color: "bg-yellow-500" },
        { name: "AWS", level: 30, icon: "☁️", color: "bg-yellow-500" },
        { name: "Git/GitHub", level: 70, icon: "📦", color: "bg-orange-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            フロントエンド開発を中心に、モダンなWeb技術スタックを幅広く扱います
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.bgColor} ${category.borderColor} border-2 p-2 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-bold text-gray-800">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStarRating(skill.level) === 5 && (
                            <span className="text-yellow-500">⭐</span>
                          )}
                          <span className="text-sm font-bold text-gray-600">
                            Lv.{getStarRating(skill.level)}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div className="flex h-full">
                          {[1, 2, 3, 4, 5].map((segment) => (
                            <div
                              key={segment}
                              className={`flex-1 border-r border-gray-300 last:border-r-0 ${
                                segment <= getStarRating(skill.level)
                                  ? skill.color
                                  : "bg-gray-200"
                              } transition-all duration-1000 ease-out`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-black pop-text mb-6">その他の技術</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
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
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 border-2 border-teal-300 rounded-full bg-white text-gray-700 font-medium text-sm hover:bg-teal-50 hover:border-teal-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-teal-500">✓</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
