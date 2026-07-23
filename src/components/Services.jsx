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
            className="futuristic-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[var(--border)] bg-[rgba(77,184,255,0.1)] text-xl text-[var(--blue-3)] shadow-[0_0_34px_rgba(77,184,255,0.12)] sm:mb-7 sm:h-14 sm:w-14 sm:text-2xl">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl">{title}</h3>
            <p className="muted mt-3 text-sm leading-7 sm:mt-4 sm:text-base">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
