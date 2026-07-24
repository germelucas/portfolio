import type { Project } from '../types'
import { Tag } from './Tag'
import { Link } from 'react-router-dom'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rememberScrollPosition = () => {
    sessionStorage.setItem('portfolio-project-scroll', String(window.scrollY))
  }

  return (
    <article className="project-card">
      <div className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-content">
        {project.cardImages && (
          <Link className="project-image project-image-pair" to={`/projets/${project.slug}`} onClick={rememberScrollPosition} aria-label={`Lire l’étude de cas ${project.title}`}>
            {project.cardImages.map((image) => <img key={image} src={image} alt="" loading="lazy" />)}
          </Link>
        )}
        {project.image && !project.cardImages && (project.imageHref ? (
          <a className="project-image external-project-image" href={project.imageHref} target="_blank" rel="noreferrer" aria-label={`Voir le projet ${project.title}`}>
            <img src={project.image} alt={`Aperçu de ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
          </a>
        ) : (
          <Link className={project.mobileCaseStudy ? 'project-image mobile-project-image' : 'project-image'} to={`/projets/${project.slug}`} onClick={rememberScrollPosition} aria-label={`Lire l’étude de cas ${project.title}`}>
            <img src={project.image} alt={`Visuel officiel de ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
          </Link>
        ))}
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.status === 'a-completer' && <span className="draft-label">À compléter</span>}
        </div>
        {project.role && <p className="project-role">{project.role}</p>}
        {(project.period || project.duration) && <p className="project-period">{project.period}{project.period && project.duration ? ' · ' : ''}{project.duration}</p>}
        <p>{project.description}</p>
        <p className="challenge"><strong>Défi :</strong> {project.challenge}</p>
        <div className="tag-list" aria-label="Technologies utilisées">
          {project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
        </div>
        <div className="project-links">
          {project.links.map((link) => link.href && !link.external ? (
            <Link key={link.label} to={link.href} onClick={rememberScrollPosition}>{link.label}<span aria-hidden="true"> →</span></Link>
          ) : link.href ? (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a>
          ) : (
            <span key={link.label} className="disabled-link" aria-label={`${link.label}, indisponible`}>{link.label}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
