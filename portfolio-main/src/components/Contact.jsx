import site from '../data/site'

function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="section__intro">
        <p className="eyebrow">Let’s connect</p>
        <h2 id="contact-heading">Get in touch</h2>
        <p>I’m open to remote internships, junior roles, and opportunities to learn and contribute.</p>
      </div>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${site.email}`}>
          <strong>Email</strong>
          <span>{site.email}</span>
        </a>
        <a className="contact-card" href={`tel:${site.phone}`}>
          <strong>Phone</strong>
          <span>{site.phoneDisplay}</span>
        </a>
        <a className="contact-card" href={site.linkedin} target="_blank" rel="noreferrer">
          <strong>LinkedIn</strong>
          <span>Connect with me</span>
        </a>
        <a className="contact-card" href={site.github} target="_blank" rel="noreferrer">
          <strong>GitHub</strong>
          <span>See my projects</span>
        </a>
        <p className="contact-card contact-card--static">
          <strong>Location</strong>
          <span>{site.location}</span>
        </p>
      </div>
    </section>
  )
}

export default Contact
