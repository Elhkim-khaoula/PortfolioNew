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
            className="futuristic-card relative rounded-[24px] p-5 sm:rounded-[28px] sm:p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <motion.span
              className="blue-gradient-text text-5xl font-extrabold sm:text-6xl"
              initial={{ opacity: 0, scale: 0.72 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              {step.number}
            </motion.span>
            <h3 className="mt-6 text-xl font-extrabold text-white sm:mt-8 sm:text-2xl">{step.title}</h3>
            <p className="muted mt-3 text-sm leading-7 sm:mt-4 sm:text-base">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Process
