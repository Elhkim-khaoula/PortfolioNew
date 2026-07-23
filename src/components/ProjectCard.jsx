import { motion } from 'framer-motion'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="futuristic-card group rounded-[28px]"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, delay: index * 0.05 }}
    whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
  >
    <div className="relative overflow-hidden rounded-t-[28px]">
      <img
        src={project.image}
        alt={`Preview of ${project.title}`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(77,184,255,0.0)] to-[rgba(77,184,255,0.26)] opacity-0 transition group-hover:opacity-100" />
      <FiArrowUpRight className="absolute right-5 top-5 translate-y-2 text-2xl text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
    </div>
    <div className="relative p-6">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--blue-3)]">{project.category}</p>
      <h3 className="mt-3 text-2xl font-extrabold text-white">{project.title}</h3>
      <p className="muted mt-3 leading-7">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-[rgba(77,184,255,0.18)] bg-white/[0.035] px-3 py-1 text-xs font-bold text-white/88">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <a href={project.github} className="icon-button" aria-label={`GitHub ${project.title}`}>
          <FaGithub aria-hidden="true" />
        </a>
        <a href={project.detailsHref || project.demo} className="icon-button" aria-label={`Details for ${project.title}`}>
          <FiExternalLink aria-hidden="true" />
        </a>
      </div>
    </div>
  </motion.article>
)

export default ProjectCard
