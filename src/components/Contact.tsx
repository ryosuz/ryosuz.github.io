"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      label: "Address",
      value: "愛知, 日本",
      href: "#contact",
    },
    {
      label: "Business Hours",
      value: "月-金 9:00-18:00",
      href: "#contact",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black pop-text mb-4">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            プロジェクトのご相談やご質問がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-black pop-text mb-6">連絡先情報</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div>
                    <h4 className="font-black text-gray-800 mb-1">
                      {info.label}
                    </h4>
                    {info.href.startsWith("#") ? (
                      <p className="text-gray-600 font-medium">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-purple-600 hover:text-purple-800 font-bold transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-black pop-text mb-4">
                ソーシャルメディア
              </h3>
              <div className="flex space-x-4">
                <a
                  href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-500 border-2 border-gray-300 rounded-2xl flex items-center justify-center text-white hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>GitHub</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black border-2 border-gray-800 rounded-2xl flex items-center justify-center text-white hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Twitter"
                >
                  <span className="sr-only">X</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>X</title>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black pop-text mb-6">
              メッセージはこちらから
            </h3>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-black text-gray-800 mb-2"
                  >
                    👤 お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-purple-50 text-gray-800 font-medium transition-all duration-300"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-black text-gray-800 mb-2"
                  >
                    📧 メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-purple-50 text-gray-800 font-medium transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-black text-gray-800 mb-2"
                  >
                    📝 件名 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-purple-50 text-gray-800 font-medium transition-all duration-300"
                    placeholder="プロジェクトのご相談"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-black text-gray-800 mb-2"
                  >
                    💬 メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-purple-50 text-gray-800 font-medium resize-none transition-all duration-300"
                    placeholder="詳細をご記入ください..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
              >
                {isSubmitting ? "送信中..." : "メッセージを送信"}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl text-green-800 font-bold text-center">
                  ✅ メッセージを正常に送信しました。ありがとうございます！
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-linear-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl text-red-800 font-bold text-center">
                  ❌ エラーが発生しました。もう一度お試しください。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
