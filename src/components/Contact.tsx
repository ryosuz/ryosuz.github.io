"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactInfo } from "@/data";
import { SectionTitle, SocialLinks } from "./ui";

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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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

    if (!recaptchaToken) {
      setSubmitStatus("error");
      setIsSubmitting(false);

      alert("reCAPTCHAを確認してください");
      return;
    }

    try {
      const [response] = await Promise.all([
        fetch(
          "https://7rzvm1dh1i.execute-api.ap-northeast-1.amazonaws.com/prod/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, recaptchaToken }),
          },
        ),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
      const result = await response.json();
      console.log(result);
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container">
        <SectionTitle
          title="Contact"
          description="プロジェクトのご相談やご質問がございましたら、お気軽にお問い合わせください"
        />

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
                        className="text-teal-600 hover:text-teal-800 font-bold transition-colors duration-200"
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
              <SocialLinks />
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
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 bg-teal-50 text-gray-800 font-medium transition-all duration-300"
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
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 bg-teal-50 text-gray-800 font-medium transition-all duration-300"
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
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 bg-teal-50 text-gray-800 font-medium transition-all duration-300"
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
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-2xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 bg-teal-50 text-gray-800 font-medium resize-none transition-all duration-300"
                    placeholder="詳細をご記入ください..."
                  />
                </div>
              </div>

              <div className="mb-1">
                <ReCAPTCHA
                  sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={setRecaptchaToken}
                />
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
