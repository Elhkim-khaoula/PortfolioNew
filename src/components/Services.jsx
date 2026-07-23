import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { services } from '../data/portfolioData'

const Services = () => (
  <section id="services" className="section-space theme-surface">
    <div className="page-shell">
      <SectionHeader
        label="Services"
        title="Build, Structure, and Improve"
        description="Three practical ways I turn an idea into a clear, stable, and usable application."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="futuristic-card rounded-[28px] p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-[var(--border)] bg-[rgba(77,184,255,0.1)] text-2xl text-[var(--blue-3)] shadow-[0_0_34px_rgba(77,184,255,0.12)]">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">{title}</h3>
            <p className="muted mt-4 leading-7">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
