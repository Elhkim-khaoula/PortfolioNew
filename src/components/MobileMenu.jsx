import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolioData'

const MobileMenu = ({ isOpen, activeSection, onNavigate }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="absolute inset-x-3 top-[calc(100%+12px)] rounded-lg border border-[var(--border)] bg-[#080d18]/98 p-3 shadow-2xl backdrop-blur-xl md:hidden"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="grid gap-1">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={`rounded-md px-3 py-3 text-sm font-bold transition ${
                activeSection === id
                  ? 'bg-[rgba(8,123,255,0.18)] text-white'
                  : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </div>
      <a href={profile.cv} download className="primary-button mt-3 w-full">
        <FiDownload aria-hidden="true" />
        Download my CV
      </a>
    </motion.div>
  )
}

export default MobileMenu
