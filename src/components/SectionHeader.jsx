import { motion } from 'framer-motion'

const SectionHeader = ({ label, title, description, align = 'center' }) => (
  <div className={`mb-10 sm:mb-14 ${align === 'left' ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}`}>
    <motion.p
      className="section-kicker"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      {label}
    </motion.p>
    <motion.h2
      className="mt-4 text-[clamp(1.9rem,8vw,2.75rem)] font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: 0.08 }}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        className="muted mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.58, delay: 0.15 }}
      >
        {description}
      </motion.p>
    )}
  </div>
)

export default SectionHeader
