import { education, experiences } from "@/data";
import { SectionTitle } from "./ui";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] scroll-mt-16"
    >
      <div className="container">
        <SectionTitle
          title="Experience"
          description="エンジニアとしての経験と実績をご紹介します"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-3 bg-teal-500 rounded-full"></div>

            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-6 h-6 bg-teal-500 border-4 border-white shadow-lg rounded-full"></div>

                <div className="ml-16 flex-1">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-teal-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-black text-gray-800 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-teal-600 font-bold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-gray-600 text-sm font-semibold">
                          {exp.location}
                        </p>
                        <p className="text-gray-600 text-sm font-semibold">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((desc) => (
                        <li key={desc} className="flex items-center">
                          <span className="text-slate-500 mr-3 text-lg">★</span>
                          <span className="text-gray-700 font-medium">
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-teal-200 border border-teal-300 text-teal-800 font-semibold rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-black pop-text mb-8 text-center">
              学歴 🎓
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-3 bg-blue-400 rounded-full"></div>

              {education.map((edu) => (
                <div
                  key={`${edu.school}-${edu.period}`}
                  className="relative flex items-start"
                >
                  <div className="absolute left-6 w-6 h-6 bg-blue-400 border-4 border-white shadow-lg rounded-full"></div>

                  <div className="ml-16 flex-1">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-lg font-black text-gray-800 mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 font-bold">
                            🏫 {edu.school}
                          </p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-gray-600 text-sm font-semibold">
                            📍 {edu.location}
                          </p>
                          <p className="text-gray-600 text-sm font-semibold">
                            📅 {edu.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mt-3 font-medium">
                        📚 {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
