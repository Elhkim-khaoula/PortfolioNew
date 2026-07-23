import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projectFilters, projects } from '../data/portfolioData'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'Tous'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="projets" className="section-padding">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Portfolio"
          title="Mes projets récents"
          subtitle="Une sélection de projets qui illustrent mes compétences en développement web, mobile, conception et bases de données."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md border px-4 py-2 text-sm font-extrabold transition ${
                activeFilter === filter
                  ? 'border-[var(--primary-light)] bg-[rgba(8,123,255,0.2)] text-white'
                  : 'border-[var(--border)] bg-white/[0.035] text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
