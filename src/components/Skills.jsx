import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { skillGroups, skillIcons } from '../data/portfolioData'

const Skills = () => (
  <section className="section-space">
    <div className="page-shell">
      <SectionHeader
        label="Skills"
        title="Real Skills, No Artificial Percentages"
        description="A clear overview of practical technologies and tools I use across front-end, back-end, mobile, and design work."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="futuristic-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <h3 className="text-lg font-extrabold text-white sm:text-xl">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill] || FiCode
                return (
                  <span key={skill} className="inline-flex min-w-0 items-center gap-2 rounded-full border border-[rgba(77,184,255,0.18)] bg-white/[0.035] px-3 py-2 text-sm font-bold text-white">
                    <Icon className="text-[var(--blue-3)]" aria-hidden="true" />
                    {skill}
                  </span>
                )
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
