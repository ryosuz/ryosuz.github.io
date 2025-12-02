export interface Project {
	title: string
	description: string
	detailedComment: string
	technologies: string[]
	screenshots: string[]
	image: string
	githubUrl: string
	liveUrl?: string
	featured: boolean
}

export interface Skill {
	name: string
	level: number
	icon: string
}

export interface SkillCategory {
	title: string
	bgColor: string
	borderColor: string
	skills: Skill[]
}

export interface Experience {
	title: string
	company: string
	location: string
	period: string
	description: string[]
	technologies: string[]
}

export interface Education {
	degree: string
	school: string
	location: string
	period: string
	description: string
}

export interface ContactInfo {
	label: string
	value: string
	href: string
}
