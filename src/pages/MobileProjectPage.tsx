import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Tag } from '../components/Tag'
import { projects } from '../data/portfolio'

export function MobileProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug && item.mobileCaseStudy)
  const study = project?.mobileCaseStudy

  useEffect(() => {
    if (!project || !study) return

    document.title = `${project.title} — Étude de cas mobile | Lucas`
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Étude de cas : conception, développement et publication en autonomie de ${study.playStoreLabel}.`)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${project.title} — Étude de cas mobile`)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', project.description)
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', `/projects/${project.slug}/screen-1.webp`)
  }, [project, study])

  if (!project || !study) return <Navigate to="/" replace />

  const icon = `/projects/${project.slug}/icon.webp`

  return (
    <>
      <a className="skip-link" href="#etude-mobile">Aller au contenu</a>
      <header className="case-header mobile-case-header">
        <Link className="brand" to="/" aria-label="Retour au portfolio">L<span>.</span></Link>
        <Link className="back-link" to="/">← Retour aux projets</Link>
      </header>

      <main id="etude-mobile" className={`mobile-study mobile-study-${project.slug}`}>
        <section className="mobile-hero" aria-labelledby="mobile-title">
          <div className="mobile-hero-copy">
            <p className="eyebrow">Étude de cas — Application Android</p>
            <div className="mobile-title-row">
              <img src={icon} alt={`Icône officielle de ${project.title}`} fetchPriority="high" />
              <div><h1 id="mobile-title">{project.title}</h1><p>{study.subtitle}</p></div>
            </div>
            <p className="mobile-role">{project.role}</p>
            <div className="mobile-meta"><span>Publiée le {study.launchDate}</span><span>Mise à jour le {study.updateDate}</span></div>
            <a className="button primary" href={study.playStoreUrl} target="_blank" rel="noreferrer">Voir sur Google Play <span aria-hidden="true">↗</span></a>
          </div>
          <div className="mobile-hero-phone" aria-hidden="true"><img src={study.media[0].src} alt="" fetchPriority="high" /></div>
        </section>

        <section className="mobile-summary mobile-section" aria-labelledby="problem-title">
          <div><p className="eyebrow">Le point de départ</p><h2 id="problem-title">{study.problem}</h2></div>
          <div className="case-prose">{study.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="mobile-timeline" aria-label="Chronologie du projet">
          <article><span>01</span><p className="eyebrow">Construction</p><h2>{study.developmentPeriod}</h2><p>Conception, développement, intégration et tests fonctionnels.</p></article>
          <article><span>02</span><p className="eyebrow">Mise en production</p><h2>{study.releasePeriod}</h2><p>Build Android, signature, monétisation, tests sur appareil et validation Google Play.</p></article>
        </section>

        <section className="mobile-section" aria-labelledby="responsibilities-title">
          <div className="case-section-heading"><p className="eyebrow">Autonomie complète</p><h2 id="responsibilities-title">Du concept jusqu’au store.</h2><p>Ces projets ne se sont pas arrêtés à une démo locale : j’ai pris en charge tout le travail nécessaire pour les rendre accessibles publiquement.</p></div>
          <ul className="responsibility-grid">{study.responsibilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul>
        </section>

        <section className="mobile-feature-band" aria-labelledby="features-title">
          <div><p className="eyebrow">Fonctionnalités</p><h2 id="features-title">Un produit utilisable, pas seulement un prototype.</h2></div>
          <ul>{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>

        <div className="mobile-gallery">{study.media.map((media) => <figure key={media.src}><div className="phone-frame"><img src={media.src} alt={media.alt} loading="lazy" /></div><figcaption>{media.caption}</figcaption></figure>)}</div>

        <section className="mobile-section technical-section" aria-labelledby="technical-title">
          <div className="case-section-heading"><p className="eyebrow">Sous le capot</p><h2 id="technical-title">Les principaux défis techniques.</h2></div>
          <ol className="technical-list">{study.technicalHighlights.map((highlight, index) => <li key={highlight}><span>{String(index + 1).padStart(2, '0')}</span><p>{highlight}</p></li>)}</ol>
          <div className="tech-stack">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
        </section>

        <section className="ai-section" aria-labelledby="ai-title">
          <div><p className="eyebrow">Développement assisté par IA</p><h2 id="ai-title">Accélérer l’apprentissage, garder la responsabilité.</h2></div>
          <p>{study.aiUsage}</p>
        </section>

        <section className="mobile-section outcome-section" aria-labelledby="outcome-title">
          <div className="case-section-heading"><p className="eyebrow">Bilan honnête</p><h2 id="outcome-title">Publier était une réussite technique. Distribuer restait un autre métier.</h2><p>{study.outcome}</p></div>
          <ul>{study.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul>
        </section>

        <section className="mobile-play-cta" aria-labelledby="store-title">
          <img src={icon} alt="" />
          <div><p className="eyebrow">Application publiée</p><h2 id="store-title">{study.playStoreLabel}</h2><p>Disponible publiquement sur Android.</p></div>
          <a className="button primary" href={study.playStoreUrl} target="_blank" rel="noreferrer">Google Play <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer><p>© {new Date().getFullYear()} Lucas Germe</p><Link to="/">Voir les autres projets</Link></footer>
    </>
  )
}
