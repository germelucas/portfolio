import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from '../components/Tag'
import { projects } from '../data/portfolio'

const project = projects.find((item) => item.slug === 'altar-corp')!
const study = project.caseStudy!

function ExternalLink({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>
}

export function AltarCorpPage() {
  useEffect(() => {
    document.title = 'ALTAR CORP — Étude de cas Unity | Lucas'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Étude de cas : développement complet d’une démo FPS rythmique sous Unity 6, réalisé en freelance par Lucas.')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'ALTAR CORP — Étude de cas Unity')
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Six semaines pour concevoir et livrer la démo jouable d’un FPS rythmique sous Unity 6.')
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', '/projects/altar-corp/hero.webp')
  }, [])

  return (
    <>
      <a className="skip-link" href="#etude">Aller au contenu</a>
      <header className="case-header">
        <Link className="brand" to="/" aria-label="Retour au portfolio">L<span>.</span></Link>
        <Link className="back-link" to="/">← Retour aux projets</Link>
      </header>

      <main id="etude" className="case-study">
        <section className="case-hero" aria-labelledby="case-title">
          <img className="case-hero-image" src={project.image} alt="Leyla et un Lowkih encadrant le logo officiel ALTAR CORP" fetchPriority="high" />
          <div className="case-hero-overlay" />
          <div className="case-hero-content">
            <p className="eyebrow">Étude de cas — Freelance</p>
            <h1 id="case-title">ALTAR<br />CORP</h1>
            <p className="case-role">{project.role}</p>
            <div className="case-meta"><span>{project.period}</span><span>{project.duration}</span><span>Démo Windows</span></div>
          </div>
        </section>

        <section className="case-intro case-block" aria-labelledby="mission-title">
          <div><p className="eyebrow">La mission</p><h2 id="mission-title">Transformer une vision en démo jouable.</h2></div>
          <div className="case-prose">{study.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <aside className="brand-proof" aria-labelledby="audience-title">
          <div><p className="eyebrow">Un univers déjà suivi</p><h2 id="audience-title">Un projet réel, porté par une communauté.</h2><p>Ces chiffres décrivent l’audience de l’univers ALTAR VISION. Ils ne sont pas le résultat de mon intervention sur la démo.</p></div>
          <dl><div><dt>70K+</dt><dd>abonnés en ligne</dd></div><div><dt>8M+</dt><dd>vues cumulées</dd></div><div><dt>2 000+</dt><dd>membres Discord</dd></div></dl>
        </aside>

        <section className="case-block" aria-labelledby="role-title">
          <div className="case-section-heading"><p className="eyebrow">Mon rôle</p><h2 id="role-title">Seul développeur de la démo.</h2><p>Je portais l’intégralité du développement et de l’intégration technique. La direction créative, les modèles et les animations étaient fournis par ALTAR VISION.</p></div>
          <ul className="responsibility-grid">{study.responsibilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul>
        </section>

        <figure className="wide-media">
          <img src={study.media[0].src} alt={study.media[0].alt} loading="lazy" />
          <figcaption>{study.media[0].caption}</figcaption>
        </figure>

        <section className="case-block rhythm-section" aria-labelledby="rhythm-title">
          <div className="case-section-heading"><p className="eyebrow">Mécanique centrale</p><h2 id="rhythm-title">Le rythme pilote tout le combat.</h2><p>Le morceau n’est pas un simple fond sonore : il fournit la timeline commune sur laquelle se synchronisent les actions et les retours du jeu.</p></div>
          <div className="rhythm-layout">
            <ol className="system-list">{study.rhythmSystems.map((item) => <li key={item}>{item}</li>)}</ol>
            <div className="timing-demo" aria-label="Fenêtres de jugement rythmique"><span className="miss">Miss</span><span className="good">Good</span><span className="perfect">Perfect</span><i aria-hidden="true" /></div>
          </div>
        </section>

        <section className="architecture" aria-labelledby="architecture-title">
          <p className="eyebrow">Architecture événementielle</p><h2 id="architecture-title">Une horloge, plusieurs systèmes synchronisés.</h2>
          <div className="architecture-flow">{study.architecture.map((step, index) => <div className={index === 1 ? 'architecture-node core' : 'architecture-node'} key={step}><span>{step}</span>{index < study.architecture.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div>
          <p className="architecture-note">Le RhythmManager planifie la lecture avec l’horloge DSP, distribue les marqueurs au bon instant et permet aux systèmes abonnés de réagir sans dépendre directement les uns des autres.</p>
        </section>

        <section className="code-section case-block" aria-labelledby="code-title">
          <div className="case-section-heading"><p className="eyebrow">Extrait C#</p><h2 id="code-title">Qualifier un tir au marqueur le plus proche.</h2><p>Une fonction courte traduit l’écart temporel en jugement de gameplay. Les fenêtres sont configurables dans Unity pour itérer rapidement avec le client.</p></div>
          <pre aria-label="Extrait de code C sharp"><code>{study.codeExcerpt}</code></pre>
        </section>

        <section className="systems-section case-block" aria-labelledby="systems-title">
          <div className="case-section-heading"><p className="eyebrow">Au-delà du rythme</p><h2 id="systems-title">Une boucle FPS complète.</h2></div>
          <div className="system-columns"><article><h3>Contrôleur & combat</h3><ul>{study.fpsSystems.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Systèmes de jeu</h3><ul>{study.supportingSystems.map((item) => <li key={item}>{item}</li>)}</ul></article></div>
        </section>

        <div className="media-grid">{study.media.slice(1).map((media) => <figure key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>

        <section className="case-block result-section" aria-labelledby="result-title">
          <div className="case-section-heading"><p className="eyebrow">Résultat</p><h2 id="result-title">De l’autonomie à la livraison.</h2></div>
          <ul>{study.results.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="tech-stack">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
        </section>

        <section className="case-links" aria-labelledby="links-title">
          <div><p className="eyebrow">Découvrir le projet</p><h2 id="links-title">Suivre ALTAR CORP.</h2></div>
          <div><ExternalLink href="https://store.steampowered.com/app/4577310/ALTAR_CORP/">Page Steam</ExternalLink><ExternalLink href="https://www.altarvision.com/media">Site ALTAR VISION</ExternalLink><ExternalLink href="https://www.instagram.com/altar.vision/">Instagram</ExternalLink></div>
        </section>

        <p className="media-credit">{study.credit} Captures officielles utilisées avec autorisation.</p>
      </main>
      <footer><p>© {new Date().getFullYear()} Lucas Germe</p><Link to="/">Voir les autres projets</Link></footer>
    </>
  )
}
