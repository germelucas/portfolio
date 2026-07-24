import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  )
}
