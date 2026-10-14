import site from '../data/site'

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="section__intro">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-heading">Projects</h2>
        <p>Small, useful products built to solve real problems and help me learn by doing.</p>
      </div>
      <div className="project-grid">
        {site.projects.map((project) => (
          <article
            className={`project-card${project.statusKind === 'wip' ? ' project-card--wip' : ''}`}
            key={project.name}
          >
            <div className="project-card__top">
              <h3>{project.name}</h3>
              <span className={`status status--${project.statusKind}`}>{project.status}</span>
            </div>
            <p>{project.description}</p>
            {project.features && (
              <ul className="feature-list">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            )}
            {project.note && <p className="project-card__note">{project.note}</p>}
            <ul className="tech-list" aria-label={`${project.name} technologies`}>
              {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="project-card__actions">
              {project.live && (
                <a
                  className="btn btn--primary btn--small"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live
                </a>
              )}
              {project.github ? (
                <a
                  className="btn btn--ghost btn--small"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              ) : (
                <span className="btn btn--ghost btn--small btn--disabled" aria-disabled="true">
                  In progress
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
