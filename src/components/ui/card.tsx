import { cn } from "../../lib/utils";

interface CardProps {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

export function Card({ className, children, onClick }: CardProps) {
	return (
		<div
			className={cn(
				"bg-cosmic-latte border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-ink-muted",
				className
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

interface CardImageProps {
	src: string;
	alt: string;
	className?: string;
}

export function CardImage({ src, alt, className }: CardImageProps) {
	return (
		<div className={cn("aspect-video bg-cosmic-latte-dark", className)}>
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover"
				loading="lazy"
			/>
		</div>
	);
}

interface CardContentProps {
	className?: string;
	children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
	return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardTitleProps {
	className?: string;
	children: React.ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
	return (
		<h3 className={cn("text-lg font-semibold text-ink", className)}>
			{children}
		</h3>
	);
}

interface CardDescriptionProps {
	className?: string;
	children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
	return (
		<p className={cn("text-ink-muted text-sm mt-2", className)}>{children}</p>
	);
}
