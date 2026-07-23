import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { skillGroups, skillIcons } from '../data/portfolioData'

const Skills = () => (
  <section id="competences" className="section-padding">
    <div className="container-shell">
      <SectionTitle
        eyebrow="Stack"
        title="Compétences techniques"
        subtitle="Des compétences organisées par domaine, sans pourcentages artificiels."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-card rounded-lg p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <h3 className="text-lg font-extrabold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill]
                return (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.035] px-3 py-2 text-sm font-bold text-white">
                    {Icon && <Icon className="text-[var(--primary-light)]" aria-hidden="true" />}
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
