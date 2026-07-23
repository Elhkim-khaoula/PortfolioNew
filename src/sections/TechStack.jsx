import { techStack } from '../data/portfolioData'

const TechStack = () => {
  const items = [...techStack, ...techStack]

  return (
    <section aria-label="Technologies" className="border-y border-[var(--border)] bg-[#080d18]/76 py-5">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-3">
          {items.map(({ name, icon: Icon }, index) => (
            <span
              key={`${name}-${index}`}
              className="flex min-w-max items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.035] px-5 py-3 text-sm font-extrabold text-white"
            >
              <Icon className="text-[var(--primary-light)]" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
