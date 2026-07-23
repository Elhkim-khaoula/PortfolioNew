import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { faq } from '../data/portfolioData'

const FAQ = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />
        <div className="mx-auto max-w-3xl space-y-4">
          {faq.map((item, index) => {
            const isOpen = open === index
            return (
              <div
                key={item.question}
                className={`rounded-[24px] border bg-[var(--card)] transition ${
                  isOpen ? 'border-[rgba(164,222,255,0.62)] shadow-[0_0_34px_rgba(77,184,255,0.12)]' : 'border-[var(--border)]'
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-extrabold text-white"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className={`relative h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-45' : ''}`}>
                    <span className="absolute left-0 top-1/2 h-0.5 w-5 bg-[var(--blue-3)]" />
                    <span className="absolute left-1/2 top-0 h-5 w-0.5 bg-[var(--blue-3)]" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="muted px-6 pb-6 leading-7">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
