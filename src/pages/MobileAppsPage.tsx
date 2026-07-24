import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from '../components/Tag'
import { projects } from '../data/portfolio'

const zen = projects.find((project) => project.slug === 'zen-sleep')!
const good = projects.find((project) => project.slug === 'good')!
const zenStudy = zen.mobileCaseStudy!
const goodStudy = good.mobileCaseStudy!

const apps = [
  { project: zen, study: zenStudy, icon: '/projects/zen-sleep/icon.webp', className: 'zen' },
  { project: good, study: goodStudy, icon: '/projects/good/icon.webp', className: 'good' },
]

export function MobileAppsPage() {
  useEffect(() => {
    document.title = 'Deux applications Android publiées | Lucas Germe'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Étude de cas de Zen Sleep et GOOD, deux applications Android conçues, développées et publiées en autonomie complète.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Deux applications Android publiées')
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Deux cycles produit complets pour apprendre le développement mobile assisté par IA et la publication Google Play.')
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', '/projects/zen-sleep/screen-1.webp')
  }, [])

  return (
    <>
      <a className="skip-link" href="#mobile-apps-study">Aller au contenu</a>
      <header className="case-header">
        <Link className="brand" to="/" aria-label="Retour au portfolio">LG<span>.</span></Link>
        <Link className="back-link" to="/">← Retour aux projets</Link>
      </header>

      <main id="mobile-apps-study" className="apps-study">
        <section className="apps-hero" aria-labelledby="apps-title">
          <div className="apps-hero-copy">
            <p className="eyebrow">Étude de cas — Développement mobile</p>
            <h1 id="apps-title">Deux idées.<br /><span>Deux applications publiées.</span></h1>
            <p>Zen Sleep et GOOD m’ont permis de parcourir deux fois toute la chaîne d’un produit mobile : conception, code, intégration native, monétisation, tests et publication Google Play.</p>
            <div className="mobile-meta"><span>Octobre 2025 — mars 2026</span><span>100 % autonome</span><span>Android</span></div>
          </div>
          <div className="apps-hero-phones" aria-hidden="true">
            <div><img src={zenStudy.media[0].src} alt="" fetchPriority="high" /></div>
            <div><img src={goodStudy.media[0].src} alt="" fetchPriority="high" /></div>
          </div>
        </section>

        <section className="apps-intro mobile-section" aria-labelledby="journey-title">
          <div><p className="eyebrow">Le parcours</p><h2 id="journey-title">Apprendre en livrant de vrais produits.</h2></div>
          <div className="case-prose"><p>Ces deux applications sont nées de ma découverte des agents IA de code. Mon objectif était de progresser rapidement tout en allant plus loin qu’un exercice : construire des produits utilisables et les rendre réellement disponibles.</p><p>Pour chaque application, j’ai consacré environ un mois au développement puis un mois aux builds Android, aux tests, à la signature, aux achats intégrés et au processus Google Play.</p></div>
        </section>

        <section className="apps-comparison" aria-label="Présentation des deux applications">
          {apps.map(({ project, study, icon, className }) => (
            <article className={`app-comparison-card ${className}`} key={project.slug}>
              <div className="app-card-heading"><img src={icon} alt={`Icône de ${project.title}`} /><div><p className="eyebrow">Publiée le {study.launchDate}</p><h2>{project.title}</h2><p>{study.subtitle}</p></div></div>
              <p className="app-problem">{study.problem}</p>
              <ul>{study.features.slice(0, 5).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="tech-stack">{project.technologies.slice(0, 5).map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
              <a href={study.playStoreUrl} target="_blank" rel="noreferrer">Voir sur Google Play <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </section>

        <section className="mobile-timeline apps-timeline" aria-label="Cycle de développement commun">
          <article><span>01</span><p className="eyebrow">Environ 1 mois</p><h2>Concevoir et développer</h2><p>Définition du besoin, interface, architecture, fonctionnalités, intégration et débogage.</p></article>
          <article><span>02</span><p className="eyebrow">Environ 1 mois</p><h2>Tester et publier</h2><p>Build de production, fonctions natives, monétisation, signature, fiche store et validation Google Play.</p></article>
        </section>

        <section className="mobile-section" aria-labelledby="technical-title">
          <div className="case-section-heading"><p className="eyebrow">Deux stacks, des défis différents</p><h2 id="technical-title">Du moteur audio à la personnalisation.</h2></div>
          <div className="apps-technical-grid">
            <article><h3>Zen Sleep — Flutter</h3><ol>{zenStudy.technicalHighlights.map((item) => <li key={item}>{item}</li>)}</ol></article>
            <article><h3>GOOD — React Native</h3><ol>{goodStudy.technicalHighlights.map((item) => <li key={item}>{item}</li>)}</ol></article>
          </div>
        </section>

        <div className="apps-gallery">
          {apps.map(({ project, study }) => <section key={project.slug} aria-labelledby={`${project.slug}-gallery`}><h2 id={`${project.slug}-gallery`}>{project.title}</h2><div>{study.media.map((media) => <figure key={media.src}><div className="phone-frame"><img src={media.src} alt={media.alt} loading="lazy" /></div><figcaption>{media.caption}</figcaption></figure>)}</div></section>)}
        </div>

        <section className="ai-section apps-ai" aria-labelledby="ai-title">
          <div><p className="eyebrow">Développement assisté par IA</p><h2 id="ai-title">Des accélérateurs, pas des pilotes automatiques.</h2></div>
          <p>Les agents IA m’ont permis d’explorer deux écosystèmes plus rapidement. Je suis resté responsable du produit, des arbitrages, de l’intégration, des tests sur appareils, de la résolution des erreurs natives et de chaque publication.</p>
        </section>

        <section className="mobile-section outcome-section" aria-labelledby="outcome-title">
          <div className="case-section-heading"><p className="eyebrow">Bilan honnête</p><h2 id="outcome-title">Publier ne suffit pas pour créer une boucle produit.</h2><p>Les deux applications existent et ont été livrées publiquement, mais leur acquisition est restée trop faible pour générer assez de données et guider des améliorations fiables. Cette limite m’a appris que la distribution, la mesure et les retours utilisateurs doivent être pensés dès le départ.</p></div>
          <ul><li>Deux produits réellement publiés, au-delà du prototype local.</li><li>Deux expériences complètes de développement et de livraison Android.</li><li>Une meilleure compréhension du lien entre technique, produit et acquisition.</li></ul>
        </section>
      </main>

      <footer><p>© {new Date().getFullYear()} Lucas Germe</p><Link to="/">Retour au portfolio</Link></footer>
    </>
  )
}
