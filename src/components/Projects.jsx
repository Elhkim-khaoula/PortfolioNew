import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolioData'

const Projects = () => (
  <section id="projets" className="section-space">
    <div className="page-shell">
      <SectionHeader
        label="Recent Projects"
        title="A Selection of Real Projects"
        description="Web, mobile, CMS, and design projects that reflect my Full Stack journey."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
