import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import profileImage from '../assets/profile.jpg'
import SectionTitle from '../components/SectionTitle'
import { aboutFacts, profile } from '../data/portfolioData'

const About = () => (
  <section id="a-propos" className="section-padding">
    <div className="container-shell">
      <SectionTitle eyebrow="À propos" title="À propos de moi" align="left" />
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          className="glass-card rounded-lg p-5"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Remplacer src/assets/profile.jpg par la vraie photo de profil de Khaoula. */}
          <img src={profileImage} alt="Khaoula El Hkim" className="aspect-[4/5] w-full rounded-lg object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="muted text-lg leading-8">
            Je suis Khaoula El Hkim, jeune diplômée en Développement Informatique et passionnée
            par la création d’applications web modernes. Je me spécialise dans les technologies
            Full Stack, notamment React.js, Django, Python, PHP et SQL.
          </p>
          <p className="muted text-lg leading-8">
            Mon parcours scientifique en Eau et Environnement m’a permis de développer une forte
            capacité d’analyse, de la rigueur et une approche structurée de la résolution de
            problèmes. Aujourd’hui, je souhaite mettre cette double compétence scientifique et
            informatique au service de projets numériques innovants.
          </p>
          <p className="muted text-lg leading-8">
            Familiarisée avec la méthode Agile Scrum, Git, GitHub, Figma et la modélisation
            Merise/UML, je recherche une opportunité de stage ou un premier poste au sein d’une
            équipe dynamique.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutFacts.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-[var(--border)] bg-white/[0.035] p-4">
                <Icon className="mb-3 text-xl text-[var(--primary-light)]" aria-hidden="true" />
                <p className="text-sm font-bold text-[var(--text-secondary)]">{label}</p>
                <p className="mt-1 font-extrabold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-white/[0.035] p-4">
            <p className="text-sm font-bold text-[var(--text-secondary)]">Langues</p>
            <p className="mt-1 font-extrabold text-white">À personnaliser selon le CV final</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="primary-button">
              <FiMail aria-hidden="true" />
              Me contacter
            </a>
            {/* Placer le PDF final dans public/Khaoula_El_Hkim_CV.pdf pour conserver ce lien. */}
            <a href={profile.cv} download className="secondary-button">
              <FiDownload aria-hidden="true" />
              Télécharger mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
