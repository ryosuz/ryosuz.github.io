import { otherTechnologies, skillCategories } from "@/data";
import { SectionTitle } from "./ui";

const GRAY_SHADES: Record<number, string> = {
  1: "bg-gray-300",
  2: "bg-gray-400",
  3: "bg-gray-600",
  4: "bg-gray-700",
  5: "bg-gray-900",
};

function getGrayShade(level: number): string {
  return GRAY_SHADES[level] ?? "bg-gray-300";
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] scroll-mt-16"
    >
      <div className="container">
        <SectionTitle
          title="Skills"
          description="フロントエンドを中心に、モダンなWeb技術スタックを幅広く扱います"
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            バックエンドに注力することが少なかったので、様々な技術を触って成長したいと思っています
          </p>
        </SectionTitle>

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
                          {skill.level === 5 && (
                            <span className="text-yellow-500">⭐</span>
                          )}
                          <span className="text-sm font-bold text-gray-600">
                            Lv.{skill.level}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div className="flex h-full">
                          {[1, 2, 3, 4, 5].map((segment) => (
                            <div
                              key={segment}
                              className={`flex-1 border-r border-gray-100 last:border-r-0 ${
                                segment <= skill.level
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
            {otherTechnologies.map((tech) => (
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
