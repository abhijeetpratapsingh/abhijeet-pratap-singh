import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { Seo, personJsonLd, projectSeoAnchor } from '../components/Seo'
import { writingNotes, writingPosts } from '../content/writing'
import {
  certifications,
  contact,
  experience,
  featuredProjects,
  heroStats,
  impactMetrics,
  isRealProfileUrl,
  proofPoints,
  skillGroups,
} from '../data/siteContent'

export function HomePage() {
  const visibleProfiles = [
    isRealProfileUrl(contact.linkedin) ? { label: 'LinkedIn', href: contact.linkedin } : null,
    isRealProfileUrl(contact.github) ? { label: 'GitHub', href: contact.github } : null,
  ].filter(Boolean)

  const [featuredPost] = writingPosts
  const writingPreview = writingNotes.slice(0, 2)
  const operatingPoints = [
    'Architecture decisions shaped by real delivery constraints',
    'Performance work grounded in product reliability, not vanity metrics',
    'AI workflows scoped to narrow, measurable team bottlenecks',
  ]

  return (
    <div className="page">
      <Seo
        type="profile"
        structuredData={personJsonLd({
          email: contact.email,
          location: contact.location,
          sameAs: visibleProfiles.map((profile) => profile.href),
        })}
      />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Flutter + AI Engineer</p>
            <h1>Abhijeet Pratap Singh, Senior Flutter and AI Engineer.</h1>
            <p className="hero-text">
              Senior Software Engineer in Bengaluru, India, designing Flutter and Dart mobile
              architecture, offline-first construction-tech apps, performance improvements, and
              practical AI developer tooling for product teams.
            </p>
            <ul className="proof-strip" aria-label="Core strengths">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">
                View Projects
              </Link>
              <Link className="button" to="/resume">
                Resume
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <p className="panel-label">Engineering profile</p>
            <ul className="hero-stats" aria-label="Key highlights">
              {heroStats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
            <div className="signal-cluster" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Featured Work"
          title="Selected projects that show how I work under product, delivery, and performance constraints."
          body="The strongest case studies here sit at the overlap of mobile architecture, configurability, and focused AI implementation."
        />
        <div className="feature-stack">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="feature-project">
              <div className="feature-project-header">
                <div>
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                </div>
                <p className="feature-tag">{project.category}</p>
              </div>
              <p>{project.summary}</p>
              <div className="feature-project-meta" aria-label={`${project.title} metadata`}>
                <span>{project.roleLabel}</span>
                <span>{project.team}</span>
                <span>{project.timeline}</span>
              </div>
              <div className="feature-project-footer">
                <p className="project-impact">{project.impact}</p>
                <Link className="text-link" to={`/projects/${project.slug}`}>
                  {projectSeoAnchor(project)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <SectionIntro
            eyebrow="About"
            title="Engineering-first execution across mobile systems and applied AI."
            body="My work sits at the intersection of Flutter product engineering, maintainable architecture, and practical AI implementation. I focus on building systems that operate well under real constraints, from low-connectivity field environments to internal developer workflows."
          />
          <div className="principles-block">
            <p className="panel-label">How I operate</p>
            <ul className="plain-list compact-list">
              {operatingPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-split">
        <div>
          <SectionIntro eyebrow="Impact" title="Measured outcomes, not generic capability claims." />
          <div className="metrics-grid">
            {impactMetrics.map((item) => (
              <article key={item.label} className="metric">
                <p>{item.value}</p>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionIntro
            eyebrow="Experience"
            title="A path shaped by delivery, architecture, and team-level impact."
            body="7 years across product teams, enterprise mobile delivery, and internal AI tooling."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-split">
        <div>
          <SectionIntro
            eyebrow="Skills"
            title="Core tools and practices."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionIntro
            eyebrow="Writing"
            title="Published thoughts and technical notes around engineering systems and applied AI."
            body="The writing section now combines published essays with developing notes on architecture, offline-first systems, and AI workflows."
          />
          <article className="published-post-preview">
            <p className="writing-status">{featuredPost.date}</p>
            <h3>
              <Link to={`/writing/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h3>
            <p>{featuredPost.summary}</p>
            <Link className="text-link" to={`/writing/${featuredPost.slug}`}>
              Read article
            </Link>
          </article>
          <div className="writing-list quiet-list">
            {writingPreview.map((item) => (
              <article key={item.title}>
                <p className="writing-status">{item.status}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" to="/writing">
            Open writing
          </Link>
        </div>
      </section>

      <section className="section section-quiet">
        <SectionIntro
          eyebrow="Certifications"
          title="Focused learning that supports the core engineering profile."
        />
        <ul className="plain-list certifications-list">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">Contact</p>
        <h2>Open to conversations around Flutter architecture, AI tooling, and product delivery.</h2>
        <p className="section-copy">
          If you are hiring, building, or evaluating a mobile product with real engineering
          constraints, I am available for focused discussions.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${contact.email}`}>
            Email Me
          </a>
          <Link className="button" to="/resume">
            Review Resume
          </Link>
        </div>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {visibleProfiles.map((profile) => (
            <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
              {profile.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
