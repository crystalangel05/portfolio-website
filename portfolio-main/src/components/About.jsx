import site from '../data/site'

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="section__intro">
        <p className="eyebrow">A little context</p>
        <h2 id="about-heading">About me</h2>
      </div>
      <div className="about-layout">
        <div>
          {site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="about-cards">
          <article>
            <p className="eyebrow">Education</p>
            <h3>{site.education.degree}</h3>
            <p className="about-cards__role">{site.education.school}</p>
            <p>{site.education.years}</p>
            {site.certifications.map((certification) => (
              <p key={certification}>{certification}</p>
            ))}
          </article>
          {site.experience.map((experience) => (
            <article key={experience.title}>
              <p className="eyebrow">{experience.year}</p>
              <h3>{experience.title}</h3>
              <p className="about-cards__role">{experience.role}</p>
              <p>{experience.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
