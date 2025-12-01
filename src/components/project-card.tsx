import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { useState } from "react";
import type { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === project.screenshots.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? project.screenshots.length - 1 : prev - 1
		);
	};

	return (
		<>
			<Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={openModal}>
				<div className="aspect-video bg-cosmic-latte-dark flex items-center justify-center overflow-hidden">
					{project.image.startsWith("/api/placeholder") ? (
						<div className="text-ink-muted text-sm">No Image</div>
					) : (
						<img
							src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${project.image}`}
							alt={project.title}
							className="w-full h-full object-cover"
						/>
					)}
				</div>
				<CardContent>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
					<div className="flex flex-wrap gap-2 mt-4">
						{project.technologies.slice(0, 4).map((tech) => (
							<span
								key={tech}
								className="px-2 py-1 text-xs text-ink-muted bg-cosmic-latte-dark rounded"
							>
								{tech}
							</span>
						))}
						{project.technologies.length > 4 && (
							<span className="px-2 py-1 text-xs text-ink-muted bg-cosmic-latte-dark rounded">
								+{project.technologies.length - 4}
							</span>
						)}
					</div>
					{project.featured && (
						<div className="mt-3">
							<span className="px-2 py-1 text-xs text-white bg-ink rounded">
								Featured
							</span>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
					onClick={closeModal}
				>
					<div
						className="bg-cosmic-latte rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="flex justify-between items-center p-6 border-b border-border">
							<h3 className="text-2xl font-bold text-ink">{project.title}</h3>
							<button
								onClick={closeModal}
								className="p-2 hover:bg-cosmic-latte-dark rounded-full transition-colors"
							>
								<X size={24} />
							</button>
						</div>

						{/* Screenshot Carousel */}
						{project.screenshots.length > 0 && !project.screenshots[0].startsWith("/api/placeholder") && (
							<div className="relative bg-cosmic-latte-dark">
								<div className="aspect-video flex items-center justify-center">
									<img
										src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${project.screenshots[currentImageIndex]}`}
										alt={`${project.title} screenshot ${currentImageIndex + 1}`}
										className="max-w-full max-h-full object-contain"
									/>
								</div>
								{project.screenshots.length > 1 && (
									<>
										<button
											onClick={prevImage}
											className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
										>
											<ChevronLeft size={24} />
										</button>
										<button
											onClick={nextImage}
											className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
										>
											<ChevronRight size={24} />
										</button>
										<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
											{project.screenshots.map((_, index) => (
												<button
													key={index}
													onClick={() => setCurrentImageIndex(index)}
													className={`w-2 h-2 rounded-full transition-colors ${
														index === currentImageIndex ? "bg-ink" : "bg-white/60"
													}`}
												/>
											))}
										</div>
									</>
								)}
							</div>
						)}

						{/* Modal Content */}
						<div className="p-6 space-y-6">
							{/* Description */}
							<div>
								<h4 className="text-lg font-semibold text-ink mb-2">概要</h4>
								<p className="text-ink-light leading-relaxed">{project.detailedComment}</p>
							</div>

							{/* Technologies */}
							<div>
								<h4 className="text-lg font-semibold text-ink mb-2">使用技術</h4>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-sm text-ink bg-cosmic-latte-dark rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="flex gap-4 pt-4 border-t border-border">
								{project.liveUrl && project.liveUrl !== "https://example.com" && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-white rounded-lg hover:bg-ink-light transition-colors"
									>
										<ExternalLink size={16} />
										Live Demo
									</a>
								)}
								{project.githubUrl && project.githubUrl !== "https://github.com" && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 border border-ink text-ink rounded-lg hover:bg-cosmic-latte-dark transition-colors"
									>
										<Github size={16} />
										View Code
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
