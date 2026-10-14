import { useEffect, useState } from 'react'
import site from '../data/site'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__logo" href="#home" onClick={closeMenu}>
          <span className="nav__mark" aria-hidden="true">C</span>
          <span>{site.shortName}</span>
        </a>
        <nav className="nav__desktop" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="btn btn--primary btn--small nav__cta" href="#contact">
          Get in touch
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`nav__mobile${menuOpen ? ' is-open' : ''}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
