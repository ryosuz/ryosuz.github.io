import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import type { Project } from "@/types"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

interface ProjectCardProps {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<ProjectDialog project={project}>
			<Card className="cursor-pointer hover:shadow-lg transition-shadow">
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
							<span className="px-2 py-1 text-xs text-white bg-ink rounded">Featured</span>
						</div>
					)}
				</CardContent>
			</Card>
		</ProjectDialog>
	)
}

interface ProjectDialogProps {
	children: React.ReactNode
	project: Project
}
function ProjectDialog({ children, project }: ProjectDialogProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1))
	}

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1))
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-4xl! w-full! max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{project.title}</DialogTitle>
				</DialogHeader>
				{/* Screenshot Carousel */}
				{project.screenshots.length > 0 &&
					!project.screenshots[0].startsWith("/api/placeholder") && (
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
										type="button"
										onClick={prevImage}
										className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-cosmic-latte-dark/80 hover:bg-cosmic-latte-dark rounded-full transition-colors"
									>
										<ChevronLeft size={24} />
									</button>
									<button
										type="button"
										onClick={nextImage}
										className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-cosmic-latte-dark/80 hover:bg-cosmic-latte-dark rounded-full transition-colors"
									>
										<ChevronRight size={24} />
									</button>
									<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
										{project.screenshots.map((path, index) => (
											<button
												type="button"
												key={path}
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

				{/* Thumbnail Gallery */}
				{project.screenshots.length > 1 &&
					!project.screenshots[0].startsWith("/api/placeholder") && (
						<div className="mt-4">
							<div className="flex gap-2 overflow-x-auto p-2 scrollbar-thin scrollbar-thumb-cosmic-latte-dark scrollbar-track-transparent bg-cosmic-latte-dark rounded-2xl">
								{project.screenshots.map((screenshot, index) => (
									<button
										type="button"
										key={screenshot}
										onClick={() => setCurrentImageIndex(index)}
										className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
											index === currentImageIndex
												? "border-ink scale-105 shadow-lg"
												: "border-transparent hover:border-cosmic-latte-dark hover:scale-105"
										}`}
									>
										<img
											src={`${import.meta.env.PUBLIC_BUCKET_URL}/projects/${screenshot}`}
											alt={`${project.title} thumbnail ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</button>
								))}
							</div>
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
			</DialogContent>
		</Dialog>
	)
}
