import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { writingItems, writingPosts } from '../data/siteContent'

export function WritingPage() {
  const [leadPost] = writingPosts
  const notes = writingItems

  return (
    <div className="page inner-page">
      <SectionIntro
        eyebrow="Writing"
        title="Published essays and developing notes on engineering systems, AI, and delivery."
        body="This section combines finished writing with notes that are still being developed into fuller articles."
      />

      <section className="lead-project writing-lead">
        <p className="panel-label">Published article</p>
        <h2 className="section-heading-compact">
          <Link to={`/writing/${leadPost.slug}`}>{leadPost.title}</Link>
        </h2>
        <p className="writing-status">
          {leadPost.date} · {leadPost.readTime}
        </p>
        <p className="lead">{leadPost.summary}</p>
        <Link className="text-link" to={`/writing/${leadPost.slug}`}>
          Read article
        </Link>
      </section>

      <SectionIntro
        eyebrow="Notes in Progress"
        title="Research notes that are being shaped into future essays."
      />
      <div className="writing-list writing-page-list">
        {notes.map((item) => (
          <article key={item.title}>
            <p className="writing-status">{item.status}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
