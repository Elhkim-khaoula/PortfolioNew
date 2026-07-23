import { techStack } from '../data/portfolioData'

const TechMarquee = () => {
  const items = [...techStack, ...techStack]

  return (
    <section id="technologies" className="relative border-y border-[var(--border)] bg-[var(--section-bg)] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee-track flex w-max gap-4 px-4">
          {items.map(({ name, icon: Icon }, index) => (
            <span
              key={`${name}-${index}`}
              className="group flex min-w-max items-center gap-3 rounded-full border border-[rgba(77,184,255,0.14)] bg-white/[0.025] px-6 py-3 text-sm font-extrabold text-[var(--text-2)] transition hover:border-[var(--border)] hover:text-[var(--blue-3)]"
            >
              <Icon className="text-lg opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechMarquee
