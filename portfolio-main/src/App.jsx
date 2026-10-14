import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Journal from './components/Journal'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
