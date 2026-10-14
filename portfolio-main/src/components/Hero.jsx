import site from '../data/site'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__grid">
        <div>
          <p className="hero__name">{site.name}</p>
          <h1 id="hero-heading">{site.headline}</h1>
          <p className="hero__subtitle">{site.subtitle}</p>
          <p className="hero__goal">{site.goal}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">Explore my work</a>
            <a className="btn btn--ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <aside className="hero__panel" aria-label="A little about me">
          <ul>
            <li>
              <span>Currently</span>
              <strong>{site.education.degree}</strong>
              <em>{site.education.school} · {site.education.years}</em>
            </li>
            <li>
              <span>Based in</span>
              <strong>{site.location}</strong>
            </li>
            <li>
              <span>Focused on</span>
              <strong>Frontend development</strong>
              <em>JavaScript, React, and thoughtful user experiences</em>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Hero
