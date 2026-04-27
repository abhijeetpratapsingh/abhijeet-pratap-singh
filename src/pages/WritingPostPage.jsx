import { Link, useParams } from 'react-router-dom'
import { Seo, articleJsonLd } from '../components/Seo'
import { writingPosts } from '../content/writing'
import { contact } from '../data/siteContent'

export function WritingPostPage() {
  const { slug } = useParams()
  const post = writingPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <div className="page inner-page">
        <Seo
          title="Article not found | Abhijeet Pratap Singh"
          description="The requested article could not be found on Abhijeet Pratap Singh's portfolio."
          noindex
        />
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
      <Seo
        title={`${post.title} | Abhijeet Pratap Singh`}
        description={post.summary}
        pathname={`/writing/${post.slug}`}
        type="article"
        structuredData={articleJsonLd(post, `/writing/${post.slug}`)}
      />
      <header className="article-header">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link to="/writing">Writing</Link>
          <span>/</span>
          <span>{post.title}</span>
        </nav>
        <div className="article-hero">
          <div className="article-hero-main">
            <p className="eyebrow">{post.eyebrow}</p>
            <h1 className="page-title article-title">{post.title}</h1>
            <p className="lead">{post.intro}</p>
          </div>
          <aside className="article-rail">
            <div>
              <p className="panel-label">Published</p>
              <p>{post.date}</p>
            </div>
            <div>
              <p className="panel-label">Read time</p>
              <p>{post.readTime}</p>
            </div>
            <div>
              <p className="panel-label">Category</p>
              <p>AI systems and engineering workflow</p>
            </div>
          </aside>
        </div>
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
