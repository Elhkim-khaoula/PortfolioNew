import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { process } from '../data/portfolioData'

const Process = () => (
  <section className="section-space">
    <div className="page-shell">
      <SectionHeader label="Method" title="A Clear Four-Step Process" />
      <div className="relative grid gap-5 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--blue)] to-transparent lg:block" />
        {process.map((step, index) => (
          <motion.article
            key={step.number}
            className="futuristic-card relative rounded-[28px] p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <motion.span
              className="blue-gradient-text text-6xl font-extrabold"
              initial={{ opacity: 0, scale: 0.72 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              {step.number}
            </motion.span>
            <h3 className="mt-8 text-2xl font-extrabold text-white">{step.title}</h3>
            <p className="muted mt-4 leading-7">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Process
