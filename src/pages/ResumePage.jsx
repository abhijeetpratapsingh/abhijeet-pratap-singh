import { Seo, personJsonLd } from '../components/Seo'
import {
  certifications,
  contact,
  experience,
  isRealProfileUrl,
  resumeSections,
  skillGroups,
} from '../data/siteContent'

export function ResumePage() {
  const visibleProfiles = [
    { label: contact.email, href: `mailto:${contact.email}` },
    isRealProfileUrl(contact.linkedin) ? { label: 'LinkedIn', href: contact.linkedin } : null,
    isRealProfileUrl(contact.github) ? { label: 'GitHub', href: contact.github } : null,
  ].filter(Boolean)

  return (
    <div className="page inner-page resume-page">
      <Seo
        title="Resume | Abhijeet Pratap Singh, Senior Software Engineer"
        description={resumeSections.summary}
        pathname="/resume"
        type="profile"
        structuredData={personJsonLd({
          email: contact.email,
          location: contact.location,
          sameAs: visibleProfiles
            .filter((profile) => profile.href.startsWith('http'))
            .map((profile) => profile.href),
        })}
      />
      <header className="resume-header">
        <p className="eyebrow">Resume</p>
        <h1 className="page-title">Abhijeet Pratap Singh</h1>
        <p className="lead">{resumeSections.summary}</p>
        <div className="resume-utility-bar">
          <div className="resume-contact-block">
            <p className="panel-label">Contact</p>
            <div className="resume-contact">
            {visibleProfiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target={profile.href.startsWith('http') ? '_blank' : undefined}
                rel={profile.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {profile.label}
              </a>
            ))}
            <span>{contact.location}</span>
            </div>
          </div>
          <a className="button button-primary" href="/Abhijeet_Pratap_Singh.pdf">
            Download PDF
          </a>
        </div>
        <nav className="resume-anchor-nav" aria-label="Resume sections">
          <p className="panel-label">Jump to</p>
          <div className="resume-anchor-row">
            <a href="#resume-experience">Experience</a>
            <a href="#resume-skills">Skills</a>
            <a href="#resume-certifications">Certifications</a>
          </div>
        </nav>
        <div className="resume-summary-strip">
          <article>
            <p className="panel-label">Focus</p>
            <p>Flutter architecture, Dart mobile apps, offline-first systems, and applied AI tooling.</p>
          </article>
          <article>
            <p className="panel-label">Recent work</p>
            <p>
              Senior Software Engineer work in Bengaluru, India across construction-tech delivery,
              performance tuning, and internal AI workflows.
            </p>
          </article>
          <article>
            <p className="panel-label">Strength</p>
            <p>Product-ready implementation with measurable engineering outcomes.</p>
          </article>
        </div>
      </header>

      <section className="resume-flow">
        <article id="resume-experience" className="resume-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.details}</p>
                <ul className="plain-list compact-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="resume-section">
          <h2>Education</h2>
          <p>{resumeSections.education}</p>
        </article>

        <article className="resume-section">
          <h2>Key Areas</h2>
          <ul className="plain-list">
            {resumeSections.keyAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article id="resume-skills" className="resume-section">
          <h2>Skills</h2>
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
        </article>

        <article id="resume-certifications" className="resume-section">
          <h2>Certifications</h2>
          <ul className="plain-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}
