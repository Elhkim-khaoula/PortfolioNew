import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { workProcess } from '../data/portfolioData'

const WorkProcess = () => (
  <section className="section-padding bg-[#080d18]/50">
    <div className="container-shell">
      <SectionTitle eyebrow="Méthode" title="Ma méthode de travail" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {workProcess.map((step, index) => (
          <motion.article
            key={step.number}
            className="glass-card rounded-lg p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span className="text-sm font-extrabold text-[var(--primary-light)]">{step.number}</span>
            <h3 className="mt-3 text-xl font-extrabold text-white">{step.title}</h3>
            <p className="muted mt-3 leading-7">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default WorkProcess
