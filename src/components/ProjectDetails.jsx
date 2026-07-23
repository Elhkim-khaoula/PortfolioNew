import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const ProjectDetails = ({ project }) => {
  const showScreens = !project.hideScreens

  return (
    <main className="section-space pt-24 sm:pt-32">
      <div className="page-shell">
        <a href="#projets" className="secondary-button text-sm">
          <FiArrowLeft aria-hidden="true" />
          Back to projects
        </a>

        <section className={`mt-8 grid gap-8 lg:items-center ${showScreens ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''}`}>
          <div>
            <p className="section-kicker">{project.category}</p>
            <h1 className="mt-5 text-[clamp(2.15rem,10vw,3.5rem)] font-extrabold leading-tight text-white md:text-6xl">{project.title}</h1>
            <p className="muted mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">{project.details || project.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[rgba(77,184,255,0.22)] bg-white/[0.04] px-3 py-2 text-xs font-extrabold text-white/88 sm:px-4"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.highlights?.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-[var(--border)] bg-white/[0.035] px-4 py-3 text-sm font-bold text-[var(--blue-3)]">
                    {highlight}
                  </div>
                ))}
              </div>
            )}

            {project.summary?.length > 0 && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {project.summary.map((item) => (
                  <article key={item.title} className="futuristic-card rounded-[22px] p-4 sm:rounded-[24px] sm:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--blue-3)]">{item.title}</p>
                    <p className="muted mt-3 leading-7">{item.description}</p>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <a href={project.github} className="icon-button" aria-label={`GitHub ${project.title}`}>
                <FaGithub aria-hidden="true" />
              </a>
              <a href={project.demo} className="icon-button" aria-label={`Demo ${project.title}`}>
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>

          {showScreens && (
            <div className="futuristic-card grid overflow-hidden rounded-[24px] bg-[rgba(5,8,15,0.58)] p-3 sm:rounded-[28px] sm:p-4">
              <img src={project.image} alt={`Main screenshot for ${project.title}`} className="mx-auto max-h-[520px] w-auto max-w-full object-contain object-top sm:max-h-[620px]" />
            </div>
          )}
        </section>

        {showScreens && project.gallery?.length > 0 && (
          <section className="mt-16">
            <p className="section-kicker">Gallery</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Project Screens</h2>

            <div className="mt-8 grid gap-6">
              {project.gallery.map((item) => (
                <article key={item.src} className="futuristic-card overflow-hidden rounded-[24px] sm:rounded-[28px]">
                  <div className="grid bg-[rgba(5,8,15,0.58)]">
                    <img src={item.src} alt={`${project.title} - ${item.title}`} loading="lazy" className="max-h-[560px] w-full object-contain object-top sm:max-h-[780px]" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--blue-3)]">{item.title}</p>
                    <p className="muted mt-3 leading-7">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProjectDetails
