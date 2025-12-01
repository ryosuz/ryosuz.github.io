import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "../lib/utils";

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<div className="text-center py-12">
				<p className="text-ink font-medium">
					お問い合わせありがとうございます。
				</p>
				<p className="text-ink-muted mt-2">
					内容を確認次第、ご連絡いたします。
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label
					htmlFor="name"
					className="block text-sm text-ink-muted mb-2"
				>
					お名前
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full px-4 py-3 bg-cosmic-latte border border-border rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
					placeholder="山田 太郎"
				/>
			</div>
			<div>
				<label
					htmlFor="email"
					className="block text-sm text-ink-muted mb-2"
				>
					メールアドレス
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className="w-full px-4 py-3 bg-cosmic-latte border border-border rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
					placeholder="your@email.com"
				/>
			</div>
			<div>
				<label htmlFor="subject" className="block text-sm text-ink-muted mb-2">件名</label>
				<input type="text" id="subject" name="subject" required className="w-full px-4 py-3 bg-cosmic-latte border border-border rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors" placeholder="件名" />
			</div>
			<div>
				<label
					htmlFor="message"
					className="block text-sm text-ink-muted mb-2"
				>
					メッセージ
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={5}
					className="w-full px-4 py-3 bg-cosmic-latte border border-border rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors resize-none"
					placeholder="詳細を入力してください..."
				/>
			</div>
			<button
				type="submit"
				disabled={isSubmitting}
				className={cn(
					"inline-flex items-center gap-2 px-6 py-3 bg-ink text-cosmic-latte text-sm font-medium rounded-lg transition-colors",
					isSubmitting
						? "opacity-50 cursor-not-allowed"
						: "hover:bg-ink-light"
				)}
			>
				{isSubmitting ? (
					"Sending..."
				) : (
					<>
						<Send size={16} />
						Send Message
					</>
				)}
			</button>
		</form>
	);
}
