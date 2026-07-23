import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { volunteering } from '../data/portfolioData'

const Volunteering = () => (
  <section className="section-padding">
    <div className="container-shell">
      <SectionTitle eyebrow="Engagement" title="Engagement associatif" />
      <div className="grid gap-5 md:grid-cols-2">
        {volunteering.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass-card rounded-lg p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <span className="text-sm font-extrabold text-[var(--primary-light)]">{item.date}</span>
            <h3 className="mt-2 text-xl font-extrabold text-white">{item.title}</h3>
            <p className="muted mt-3 leading-7">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Volunteering
