import { Link, useParams } from 'react-router-dom'
import { contact, featuredProjects } from '../data/siteContent'

export function ProjectPage() {
  const { slug } = useParams()
  const projectIndex = featuredProjects.findIndex((item) => item.slug === slug)
  const project = featuredProjects[projectIndex]
  const nextProject = projectIndex >= 0 ? featuredProjects[(projectIndex + 1) % featuredProjects.length] : null

  if (!project) {
    return (
      <div className="page inner-page">
        <p className="eyebrow">Not found</p>
        <h1 className="page-title">Project not found.</h1>
        <Link className="text-link" to="/projects">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page project-page">
      <section className="project-hero">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="project-meta-grid" aria-label={`${project.title} summary`}>
          <article>
            <p className="panel-label">Role</p>
            <p>{project.roleLabel}</p>
          </article>
          <article>
            <p className="panel-label">Team</p>
            <p>{project.team}</p>
          </article>
          <article>
            <p className="panel-label">Timeline</p>
            <p>{project.timeline}</p>
          </article>
          <article>
            <p className="panel-label">Outcome</p>
            <p>{project.outcomeLabel}</p>
          </article>
        </div>
      </section>

      <section className="project-body">
        <div className="project-main">
          <article>
            <h2>Problem</h2>
            <p>{project.challenge}</p>
          </article>
          <article>
            <h2>Role</h2>
            <p>{project.role}</p>
          </article>
          <article>
            <h2>Approach</h2>
            <ul className="plain-list">
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Impact</h2>
            <ul className="plain-list">
              {project.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Key learning</h2>
            <p>{project.learnings}</p>
          </article>
        </div>

        <aside className="project-aside">
          <div>
            <p className="aside-label">Impact summary</p>
            <p>{project.impact}</p>
          </div>
          <div>
            <p className="aside-label">Project type</p>
            <p>{project.category}</p>
          </div>
          <div>
            <p className="aside-label">Stack</p>
            <ul className="plain-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Link className="text-link" to="/projects">
            Back to projects
          </Link>
        </aside>
      </section>

      <section className="project-cta">
        <p className="eyebrow">Next step</p>
        <h2 className="section-heading-compact">
          If this case study is relevant, the next move is straightforward.
        </h2>
        <p className="section-copy">
          You can review the broader portfolio, move to the next case study, or contact me
          directly for a conversation around similar product and engineering work.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${contact.email}`}>
            Email Me
          </a>
          <Link className="button" to="/resume">
            Review Resume
          </Link>
          {nextProject ? (
            <Link className="button" to={`/projects/${nextProject.slug}`}>
              Next Project
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  )
}
