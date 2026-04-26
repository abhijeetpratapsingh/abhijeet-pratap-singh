import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { featuredProjects } from '../data/siteContent'

export function ProjectsPage() {
  const [leadProject, ...otherProjects] = featuredProjects

  return (
    <div className="page inner-page">
      <SectionIntro
        eyebrow="Projects"
        title="Projects that show how I work under product, performance, and delivery constraints."
        body="These case studies focus on product context, technical decisions, and measurable results across mobile engineering and applied AI."
      />

      <section className="lead-project">
        <p className="panel-label">Lead case study</p>
        <div className="feature-project-header">
          <div>
            <p className="eyebrow">{leadProject.eyebrow}</p>
            <h2 className="section-heading-compact">
              <Link to={`/projects/${leadProject.slug}`}>{leadProject.title}</Link>
            </h2>
          </div>
          <p className="feature-tag">{leadProject.category}</p>
        </div>
        <p className="lead">{leadProject.summary}</p>
        <div className="feature-project-meta">
          <span>{leadProject.roleLabel}</span>
          <span>{leadProject.team}</span>
          <span>{leadProject.timeline}</span>
          <span>{leadProject.outcomeLabel}</span>
        </div>
        <div className="feature-project-footer">
          <p className="project-impact">{leadProject.impact}</p>
          <Link className="button button-primary" to={`/projects/${leadProject.slug}`}>
            View case study
          </Link>
        </div>
      </section>

      <div className="projects-list">
        {otherProjects.map((project) => (
          <article key={project.slug} className="project-row">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="project-row-meta">
                {project.category} · {project.roleLabel}
              </p>
            </div>
            <div className="project-row-body">
              <p>{project.summary}</p>
              <div className="feature-project-meta">
                <span>{project.team}</span>
                <span>{project.timeline}</span>
                <span>{project.outcomeLabel}</span>
              </div>
            </div>
            <p className="project-impact">{project.impact}</p>
            <Link className="text-link" to={`/projects/${project.slug}`}>
              View case study
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
