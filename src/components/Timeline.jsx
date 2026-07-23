import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { education, experience } from '../data/portfolioData'

const TimelineList = ({ title, items }) => (
  <div>
    <h3 className="mb-5 text-xl font-extrabold text-white sm:mb-6 sm:text-2xl">{title}</h3>
    <div className="relative space-y-5 before:absolute before:left-3 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[var(--border)] sm:before:left-4">
      {items.map((item, index) => (
        <motion.article
          key={`${item.place}-${item.date}`}
          className="relative pl-9 sm:pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-[var(--blue-2)] bg-[var(--card)] shadow-[0_0_22px_rgba(77,184,255,0.22)] sm:h-8 sm:w-8" />
          <div className="futuristic-card rounded-[22px] p-4 sm:rounded-[24px] sm:p-5">
            <p className="text-sm font-extrabold text-[var(--blue-3)]">{item.date}</p>
            <h4 className="mt-2 text-base font-extrabold text-white sm:text-lg">{item.role || item.title}</h4>
            <p className="mt-1 font-bold text-[var(--text-2)]">{item.place}</p>
            {item.description && <p className="muted mt-3 text-sm leading-7 sm:text-base">{item.description}</p>}
          </div>
        </motion.article>
      ))}
    </div>
  </div>
)

const Timeline = () => (
  <section id="parcours" className="section-space theme-surface">
    <div className="page-shell">
      <SectionHeader label="Journey" title="Experience and Education" />
      <div className="grid gap-10 lg:grid-cols-2">
        <TimelineList title="Experience" items={experience} />
        <TimelineList title="Education" items={education} />
      </div>
    </div>
  </section>
)

export default Timeline
