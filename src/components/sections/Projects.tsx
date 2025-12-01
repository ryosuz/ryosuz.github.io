import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/data";
import type { Project } from "@/types";
import { Button } from "../ui/button";
import { SectionTitle } from "../ui/SectionTitle";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden relative">
                  <img
                    src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${project.image}`}
                    alt={`${project.title}の画像`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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

        {/* Dialog */}
        <ProjectDialog
          selectedProject={selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

interface SelectedImage {
  index: number;
  src: string;
}

interface ProjectDialogProps {
  selectedProject: Project | null;
  onOpenChange: (open: boolean) => void;
}
function ProjectDialog({ selectedProject, onOpenChange }: ProjectDialogProps) {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );

  // 矢印キーでのナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(selectedImage && selectedProject)) {
        return;
      }

      const screenshots = selectedProject.screenshots;

      if (e.key === "ArrowLeft" && selectedImage.index > 0) {
        setSelectedImage({
          index: selectedImage.index - 1,
          src: screenshots[selectedImage.index - 1],
        });
      } else if (
        e.key === "ArrowRight" &&
        selectedImage.index < screenshots.length - 1
      ) {
        setSelectedImage({
          index: selectedImage.index + 1,
          src: screenshots[selectedImage.index + 1],
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedProject]);

  return (
    <>
      <Dialog open={!!selectedProject} onOpenChange={onOpenChange}>
        {selectedProject && (
          <DialogContent className="max-w-4xl! max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-black text-gray-800">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Screenshots */}
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">
                  スクリーンショット
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.screenshots.map((path, index) => (
                    <button
                      key={`screenshot-${selectedProject.title}-${index}`}
                      type="button"
                      className="bg-gray-100 rounded-2xl overflow-hidden border cursor-pointer hover:shadow-lg transition-shadow w-full text-left"
                      onClick={() => setSelectedImage({ index, src: path })}
                    >
                      <img
                        src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${path}`}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="w-full h-40 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Comment */}
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">
                  詳細説明
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {selectedProject.detailedComment}
                </p>
              </div>

              {/* Technologies */}
              <div>
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
          </DialogContent>
        )}
      </Dialog>

      {selectedProject && (
        <ImageDialog
          open={!!selectedImage}
          selectedImage={selectedImage}
          onOpenChange={(open) => !open && setSelectedImage(null)}
          onNextImage={
            selectedImage &&
            selectedImage.index < selectedProject.screenshots.length - 1
              ? () => {
                  setSelectedImage({
                    index: selectedImage.index + 1,
                    src: selectedProject.screenshots[selectedImage.index + 1],
                  });
                }
              : undefined
          }
          onPrevImage={
            selectedImage && 0 < selectedImage.index
              ? () => {
                  setSelectedImage({
                    index: selectedImage.index - 1,
                    src: selectedProject.screenshots[selectedImage.index - 1],
                  });
                }
              : undefined
          }
        />
      )}
    </>
  );
}

interface ImageDialogProps {
  selectedImage: SelectedImage | null;
  open: boolean;
  onNextImage?: () => void;
  onOpenChange: (open: boolean) => void;
  onPrevImage?: () => void;
}
function ImageDialog({
  open,
  selectedImage,
  onNextImage,
  onOpenChange,
  onPrevImage,
}: ImageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-5xl! w-full p-0 bg-black/90 border-none"
        showCloseButton={false}
      >
        <DialogHeader className="hidden">
          <DialogTitle />
        </DialogHeader>
        <div className="h-fit">
          {selectedImage && (
            <>
              <div className="max-w-full max-h-full relative">
                {/* 左矢印ボタン */}
                {/* {onPrevImage && (
                  <button
                    type="button"
                    onClick={() => onPrevImage()}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="前の画像"
                  >
                    <ChevronLeft />
                  </button>
                )} */}
                <img
                  src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${selectedImage.src}`}
                  alt={`スクリーンショット:${selectedImage.src}`}
                  className="max-w-full max-h-full object-contain"
                />

                {/* 右矢印ボタン */}
                {/* {onNextImage && (
                  <button
                    type="button"
                    onClick={() => onNextImage()}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="次の画像"
                  >
                    <ChevronRight />
                  </button>
                )} */}
              </div>
              <div className="bg-white flex justify-between p-2 rounded-b-lg">
                {onPrevImage ? (
                  <Button
                    className="px-10!"
                    variant="outline"
                    size={"lg"}
                    onClick={() => onPrevImage()}
                  >
                    <ChevronLeft />
                  </Button>
                ) : (
                  <div />
                )}
                {onNextImage ? (
                  <Button
                    className="px-10!"
                    variant="outline"
                    size={"lg"}
                    onClick={() => onNextImage()}
                  >
                    <ChevronRight />
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
