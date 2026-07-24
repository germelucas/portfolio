import { useEffect, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import { profile, projects, skillGroups, socialLinks } from '../data/portfolio'

const navItems = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const initials = profile.name.split(' ').map((part) => part[0]).join('').slice(0, 2)

  useEffect(() => {
    document.title = 'Lucas Germe — Développeur full-stack junior'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Portfolio de Lucas Germe, développeur full-stack junior : expérience freelance Unity, applications mobiles publiées et projets.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Lucas Germe — Développeur full-stack junior')
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Expérience freelance Unity, compétences techniques et projets de développement.')
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', '/og-image.svg')

    const savedScrollPosition = sessionStorage.getItem('portfolio-project-scroll')
    if (savedScrollPosition) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: Number(savedScrollPosition), behavior: 'instant' })
        sessionStorage.removeItem('portfolio-project-scroll')
      })
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour à l’accueil">{initials}<span>.</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Ouvrir le menu</span><span aria-hidden="true">{menuOpen ? 'Fermer' : 'Menu'}</span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigation principale">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
            <p className="hero-kicker">Bonjour, je suis</p>
            <h1 id="hero-title">{profile.name}<br /><span>{profile.role}</span></h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">Découvrir mes projets</a>
              {profile.cvPath ? <a className="button secondary" href={profile.cvPath} download>Télécharger mon CV</a> : <span className="button secondary disabled" aria-label="CV bientôt disponible">CV bientôt disponible</span>}
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true"><span>{initials}</span></div>
          <a className="scroll-hint" href="#a-propos">Découvrir <span aria-hidden="true">↓</span></a>
        </section>

        <Section id="a-propos" eyebrow="01 — À propos" title="Construire, comprendre, progresser.">
          <div className="about-grid">
            <div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="facts"><div><dt>Profil</dt><dd>Junior</dd></div><div><dt>Localisation</dt><dd>{profile.location}</dd></div><div><dt>Objectif</dt><dd>CDI / alternance</dd></div></dl>
          </div>
        </Section>

        <Section id="competences" eyebrow="02 — Compétences" title="Une vision complète du produit.">
          <div className="skills-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div></article>)}</div>
        </Section>

        <Section id="projets" eyebrow="03 — Projets" title="Des idées transformées en solutions.">
          <p className="section-lead">Des expériences concrètes où j’ai conçu, développé et livré des systèmes complets.</p>
          <div className="projects-list">{projects.filter((project) => !project.hidden).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </Section>

        <Section id="contact" eyebrow="04 — Contact" title="Travaillons ensemble.">
          <div className="contact-panel"><div><p>Une opportunité, une question ou simplement envie d’échanger ? Je serai ravi de vous répondre.</p></div><div className="social-links">{socialLinks.map((link) => link.href ? <a key={link.label} href={link.href}>{link.label}<span aria-hidden="true">↗</span></a> : <span key={link.label} className="social-disabled">{link.label}<small>À renseigner</small></span>)}</div></div>
        </Section>
      </main>
      <footer><p>© {new Date().getFullYear()} {profile.name}</p><a href="#accueil">Retour en haut ↑</a></footer>
    </>
  )
}
