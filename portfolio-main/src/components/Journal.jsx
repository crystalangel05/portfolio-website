import site from '../data/site'

function Journal() {
  return (
    <section className="section" id="journal" aria-labelledby="journal-heading">
      <div className="section__intro">
        <p className="eyebrow">Notes from the process</p>
        <h2 id="journal-heading">Journal</h2>
        <p>Ideas and lessons I plan to share as I keep learning and building.</p>
      </div>
      <div className="journal-grid">
        {site.journal.map((post) => (
          <article className="post-card" key={post.title}>
            <div className="post-card__meta">
              <span>{post.tag}</span>
              <span>{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            {post.draft && <p className="draft-label">Draft — not published yet</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journal
