import site from '../data/site'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p>© {currentYear} {site.name}. Built with React.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

export default Footer
