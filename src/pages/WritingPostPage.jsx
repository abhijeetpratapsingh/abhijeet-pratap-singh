import { Link, useParams } from 'react-router-dom'
import { contact, writingPosts } from '../data/siteContent'

export function WritingPostPage() {
  const { slug } = useParams()
  const post = writingPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <div className="page inner-page">
        <p className="eyebrow">Not found</p>
        <h1 className="page-title">Article not found.</h1>
        <Link className="text-link" to="/writing">
          Back to writing
        </Link>
      </div>
    )
  }

  return (
    <div className="page inner-page article-page">
      <header className="article-header">
        <p className="eyebrow">{post.eyebrow}</p>
        <h1 className="page-title article-title">{post.title}</h1>
        <p className="article-meta">
          {post.date} · {post.readTime}
        </p>
        <p className="lead">{post.intro}</p>
      </header>

      <article className="article-body">
        {post.sections.map((section) => (
          <section key={section.heading} className="article-section">
            <h2 className="section-heading-compact">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="article-footer">
        <p>{post.cta}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${contact.email}`}>
            Drop a mail
          </a>
          <Link className="button" to="/writing">
            Back to writing
          </Link>
        </div>
      </section>
    </div>
  )
}
