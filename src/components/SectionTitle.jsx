import { motion } from 'framer-motion'

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => (
  <motion.div
    className={`mb-12 ${align === 'left' ? 'max-w-3xl text-left' : 'mx-auto max-w-3xl text-center'}`}
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.5 }}
  >
    {eyebrow && (
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-light)]">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
    {subtitle && <p className="muted mt-4 text-base leading-7 sm:text-lg">{subtitle}</p>}
  </motion.div>
)

export default SectionTitle
