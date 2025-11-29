export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-16">
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
                このサイトはエンジニアをしている
                <span className="text-teal-600 font-bold">Ryosuz</span>
                のポートフォリオサイトです。
              </p>
              <p className="text-gray-600 leading-relaxed font-medium mb-4">
                これまでのスキルや経験、制作したプロジェクトをご紹介します。少しでも私のことを知っていただければ幸いです。
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                駆け出しの頃はフロントエンドには全く縁がなかったのですが、気がついたらフロントエンドにハマり、
                ReactやNext.jsを中心にユーザーの期待以上のものを提供することを目指しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
