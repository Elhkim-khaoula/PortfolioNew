import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import { faq } from '../data/portfolioData'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-[#080d18]/50">
      <div className="container-shell">
        <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        <div className="mx-auto max-w-3xl space-y-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={item.question} className="glass-card rounded-lg">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold text-white"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {item.question}
                    <FiChevronDown
                      className={`shrink-0 text-[var(--primary-light)] transition ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="muted px-5 pb-5 leading-7">{item.answer}</p>
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
