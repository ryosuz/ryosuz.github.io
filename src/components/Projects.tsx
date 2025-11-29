"use client";

import { useCallback, useEffect, useState } from "react";
import { projects } from "@/data";
import type { Project } from "@/types";
import { SectionTitle } from "./ui";
import { CloseIcon } from "./ui/icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen, closeModal]);

  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container">
        <SectionTitle
          title="Projects"
          description="実務での経験や個人開発で作成した代表的なプロジェクトをご紹介します"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              type="button"
              key={project.title}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-teal-400 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-left`}
              onClick={() => openModal(project)}
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-teal-200 border-2 border-teal-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-300 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-teal-700 font-bold text-lg">
                      プロジェクト画像
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black text-gray-800 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-teal-200 border border-teal-300 text-teal-800 font-semibold rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <button
              type="button"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  closeModal();
                }
              }}
              aria-label="閉じる"
            />
            <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Close button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="閉じる"
              >
                <CloseIcon className="w-6 h-6 text-gray-600" />
              </button>

              <div className="p-8">
                {/* Title */}
                <h2 className="text-3xl font-black text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>

                {/* Screenshots */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    スクリーンショット
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((_, index) => (
                      <div
                        key={`screenshot-${selectedProject.title}-${index}`}
                        className="bg-gray-100 rounded-2xl overflow-hidden"
                      >
                        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                          <p className="text-gray-500">
                            スクリーンショット {index + 1}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Comment */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    詳細説明
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {selectedProject.detailedComment}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-3">
                    使用技術
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-200 border border-teal-300 text-teal-800 font-semibold rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center btn-primary"
                  >
                    📁 GitHub
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center btn-secondary"
                  >
                    🚀 デモを見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
