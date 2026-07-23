import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { education, experience } from '../data/portfolioData'

const TimelineList = ({ title, items }) => (
  <div>
    <h3 className="mb-6 text-2xl font-extrabold text-white">{title}</h3>
    <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-[var(--border)]">
      {items.map((item, index) => (
        <motion.article
          key={`${item.place}-${item.date}`}
          className="relative pl-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <span className="absolute left-0 top-2 h-8 w-8 rounded-full border border-[var(--blue-2)] bg-[var(--card)] shadow-[0_0_22px_rgba(77,184,255,0.22)]" />
          <div className="futuristic-card rounded-[24px] p-5">
            <p className="text-sm font-extrabold text-[var(--blue-3)]">{item.date}</p>
            <h4 className="mt-2 text-lg font-extrabold text-white">{item.role || item.title}</h4>
            <p className="mt-1 font-bold text-[var(--text-2)]">{item.place}</p>
            {item.description && <p className="muted mt-3 leading-7">{item.description}</p>}
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
