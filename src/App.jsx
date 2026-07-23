import { useEffect, useState } from 'react'
import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Projects from './components/Projects'
import Services from './components/Services'
import Stats from './components/Stats'
import Process from './components/Process'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetails from './components/ProjectDetails'
import { projects } from './data/portfolioData'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const projectSlug = hash.startsWith('#project/') ? hash.replace('#project/', '') : ''
  const activeProject = projects.find((project) => project.slug === projectSlug)

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  return (
    <>
      <BackgroundEffects />
      <Navbar />
      {activeProject ? (
        <ProjectDetails project={activeProject} />
      ) : (
        <main>
          <Hero />
          <TechMarquee />
          <Projects />
          <Services />
          <Stats />
          <Process />
          <About />
          <Timeline />
          <Skills />
          <FAQ />
          <ContactCTA />
        </main>
      )}
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
