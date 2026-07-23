import { motion } from 'framer-motion'

const AnimatedSection = ({ as: Tag = 'section', className = '', children, ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 34, scale: 0.985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    {...props}
  >
    {Tag === 'section' ? children : children}
  </motion.div>
)

export default AnimatedSection
