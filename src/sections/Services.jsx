import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/portfolioData'

const Services = () => (
  <section className="section-padding bg-[#080d18]/50">
    <div className="container-shell">
      <SectionTitle
        eyebrow="Services"
        title="Ce que je peux apporter"
        subtitle="Des bases solides pour créer, structurer et améliorer des applications web utiles."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            key={title}
            className="glass-card rounded-lg p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[rgba(8,123,255,0.16)] text-2xl text-[var(--primary-light)]">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="text-xl font-extrabold text-white">{title}</h3>
            <p className="muted mt-3 leading-7">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
