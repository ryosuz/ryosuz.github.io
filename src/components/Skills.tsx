export default function Skills() {
  const getStarRating = (level: number) => {
    return level;
  };

  const getGrayShade = (level: number) => {
    const rating = getStarRating(level);
    switch (rating) {
      case 1:
        return "bg-gray-300";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-gray-600";
      case 4:
        return "bg-gray-700";
      case 5:
        return "bg-gray-900";
      default:
        return "bg-gray-300";
    }
  };

  const skillCategories = [
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

  return (
    <section
      id="skills"
      className="py-20 bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] scroll-mt-16"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            フロントエンドを中心に、モダンなWeb技術スタックを幅広く扱います
          </p>{" "}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            バックエンドに注力することが少なかったので、様々な技術を触って成長したいと思っています
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
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div className="flex h-full">
                          {[1, 2, 3, 4, 5].map((segment) => (
                            <div
                              key={segment}
                              className={`flex-1 border-r border-gray-100 last:border-r-0 ${
                                segment <= getStarRating(skill.level)
                                  ? getGrayShade(skill.level)
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
