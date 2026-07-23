import { motion } from 'framer-motion'
import { FiDownload, FiMapPin } from 'react-icons/fi'
import profileImage from '../assets/profile.png'
import SectionHeader from './SectionHeader'
import { aboutIcons, aboutText, profile } from '../data/portfolioData'

const About = () => (
  <section id="a-propos" className="section-space theme-surface">
    <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div className="futuristic-card rounded-[32px] p-5" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <img src={profileImage} alt="Khaoula El Hkim" className="aspect-[4/5] w-full rounded-[26px] object-cover" />
        <div className="mt-5 grid gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4">
            <FiMapPin className="text-[var(--blue-3)]" aria-hidden="true" />
            <span className="font-bold text-white">{profile.location}</span>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-white/[0.035] p-4 font-bold text-white">
            Internship or junior opportunity
          </div>
          <a href={profile.cv} download className="primary-button w-full">
            <FiDownload aria-hidden="true" />
            Download my CV
          </a>
        </div>
      </motion.div>

      <div>
        <SectionHeader label="Profile" title="About Me" align="left" />
        <div className="space-y-5">
          {aboutText.map((paragraph) => (
            <p key={paragraph} className="muted text-lg leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {aboutIcons.map((Icon, index) => (
            <motion.span
              key={index}
              className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--border)] bg-white/[0.035] text-xl text-[var(--blue-3)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Icon aria-hidden="true" />
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
