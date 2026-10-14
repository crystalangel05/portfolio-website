import site from '../data/site'

function Skills() {
  const groups = [...new Set(site.skills.map((skill) => skill.group))]

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="section__intro">
        <p className="eyebrow">What I work with</p>
        <h2 id="skills-heading">Skills &amp; tools</h2>
        <p>A practical toolkit I use while building projects and growing as a developer.</p>
      </div>
      <div className="skill-groups">
        {groups.map((group) => (
          <article className="skill-group" key={group}>
            <h3>{group}</h3>
            <ul>
              {site.skills
                .filter((skill) => skill.group === group)
                .map((skill) => (
                  <li key={skill.name}>
                    {skill.name}
                    {skill.learning && <span>Learning</span>}
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
