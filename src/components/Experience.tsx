export default function Experience() {
  const experiences = [
    {
      title: "シニアフロントエンドエンジニア",
      company: "株式会社ロークス",
      location: "愛知",
      period: "2021年5月 - 現在",
      description: [
        "買取業界にどっぷりと浸かることになる",
        "React/Next.jsを使用した自社向け業務管理システムの開発",
        "AWSのSQS,S3等のサービスを用いたバックエンドシステムの構築",
        "買取情報入力から売上管理、オークション出品情報作成までの一連の業務をシステム化",
        "企業向け宅配弁当会社の業務効率化や顧客管理システム構築にも携わる",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "AWS",
        "python",
        "VBA",
        "Excel",
        "sqlite",
      ],
    },
    {
      title: "フロントエンドエンジニア",
      company: "株式会社MST",
      location: "愛知",
      period: "2020年4月 - 2021年4月",
      description: [
        "買取業界のオークション出品作業用サイトのフロントエンド開発",
        "商品ジャンル詳細化による出品情報精度向上",
        "画像自動トリミングシステムの構築",
        "初めてのReactとの出会い",
      ],
      technologies: ["PHP", "React", "TypeScript"],
    },
    {
      title: "エンジニアの卵",
      company: "株式会社インビリティー",
      location: "愛知",
      period: "2015年4月 - 2020年4月",
      description: [
        "就職そうそうに一人でのスマホゲーム開発プロジェクトに配属",
        "大手自動車企業に出向し4年間、Java, COBOLを用いたバッチ処理業務に携わる",
        "上流工程も経験し、詳細設計、基本設計等の設計業務も担当",
        "その後自社へ戻り、AIを用いた工場での危険行動検知システムのPMを経験",
      ],
      technologies: ["cocos2d-x", "Java", "C++", "C#", "Oracle", "PHP"],
    },
  ];

  const education = [
    {
      degree: "情報科学部情報科学科",
      school: "愛知県立大学",
      location: "愛知",
      period: "2010年4月 - 2014年3月",
      description: "メディア情報専攻",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] scroll-mt-16"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            エンジニアとしての経験と実績をご紹介します
          </p>
        </div>

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
