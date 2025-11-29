export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
              About this site
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-800 mb-4">
                こんにちは！
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-4">
                フロントエンドエンジニアとして、モダンでユーザーフレンドリーなWebアプリケーション開発を得意としています。
                ReactやNext.jsを中心に、デザインと技術の融合で最高のユーザー体験を提供することを目指しています。
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                このポートフォリオサイトは、私のスキルや経験、制作したプロジェクトをご紹介するために作成しました。
                シンプルながらも工夫を凝らしたデザインで、見ていて飽きないサイトを目指しました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
