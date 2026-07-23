import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { education, experience } from '../data/portfolioData'

const TimelineItems = ({ items }) => (
  <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[var(--border)]">
    {items.map((item, index) => (
      <motion.article
        key={`${item.place}-${item.date}`}
        className="relative pl-12"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-[var(--primary-light)] bg-[#0b1424] text-xs font-extrabold text-white">
          {index + 1}
        </span>
        <div className="glass-card rounded-lg p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
              <p className="mt-1 font-bold text-[var(--primary-light)]">{item.place}</p>
            </div>
            <span className="rounded-md border border-[var(--border)] px-3 py-1 text-sm font-bold text-white">
              {item.date}
            </span>
          </div>
          {item.location && <p className="muted mt-3 text-sm">{item.location}</p>}
          {item.detail && <p className="muted mt-3 leading-7">{item.detail}</p>}
          {item.description && <p className="muted mt-3 leading-7">{item.description}</p>}
        </div>
      </motion.article>
    ))}
  </div>
)

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('formation')
  const items = activeTab === 'formation' ? education : experience

  return (
    <section id="parcours" className="section-padding bg-[#080d18]/50">
      <div className="container-shell">
        <SectionTitle eyebrow="Parcours" title="Formation et expérience" />
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid grid-cols-2 rounded-lg border border-[var(--border)] bg-white/[0.035] p-1">
            {[
              ['formation', 'Formation'],
              ['experience', 'Expérience'],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`rounded-md px-4 py-3 text-sm font-extrabold transition ${
                  activeTab === key ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <TimelineItems items={items} />
        </div>
      </div>
    </section>
  )
}

export default Timeline
