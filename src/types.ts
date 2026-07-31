export interface Profile {
  name: string
  role: string
  location: string
  availability: string
  introduction: string
  about: string[]
  email?: string
  cvPath?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  title: string
  organization: string
  period: string
  location?: string
  description: string
  highlights: string[]
}

export interface BuilderStep {
  title: string
  description: string
}

export interface ProjectLink {
  label: string
  href?: string
  external?: boolean
}

export interface CaseStudyMedia {
  src: string
  alt: string
  caption: string
}

export interface CaseStudy {
  context: string[]
  responsibilities: string[]
  rhythmSystems: string[]
  fpsSystems: string[]
  supportingSystems: string[]
  architecture: string[]
  results: string[]
  media: CaseStudyMedia[]
  credit: string
  codeExcerpt: string
}

export interface MobileCaseStudy {
  subtitle: string
  launchDate: string
  updateDate: string
  developmentPeriod: string
  releasePeriod: string
  problem: string
  overview: string[]
  responsibilities: string[]
  features: string[]
  technicalHighlights: string[]
  aiUsage: string
  outcome: string
  learnings: string[]
  media: CaseStudyMedia[]
  playStoreUrl: string
  playStoreLabel: string
}

export interface Project {
  slug: string
  hidden?: boolean
  title: string
  role?: string
  period?: string
  duration?: string
  image?: string
  imageHref?: string
  cardImages?: string[]
  featured?: boolean
  description: string
  challenge: string
  technologies: string[]
  links: ProjectLink[]
  status: 'a-completer' | 'publie'
  caseStudy?: CaseStudy
  mobileCaseStudy?: MobileCaseStudy
}

export interface SocialLink {
  label: string
  href?: string
}
