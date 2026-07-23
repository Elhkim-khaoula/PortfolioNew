import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiFolder } from 'react-icons/fi'
import profileImage from '../assets/profile.jpg'
import SocialLinks from '../components/SocialLinks'
import { heroStats, profile } from '../data/portfolioData'

const techBadges = ['React.js', 'Django', 'Python', 'JavaScript', 'SQL']

const Hero = () => (
  <section id="accueil" className="grid-bg relative overflow-hidden pt-28 sm:pt-32">
    <div className="container-shell grid min-h-[calc(100svh-112px)] items-center gap-12 py-14 lg:grid-cols-[1.04fr_0.96fr]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex rounded-md border border-[var(--border)] bg-[rgba(8,123,255,0.12)] px-4 py-2 text-sm font-bold text-[var(--primary-light)]">
          Disponible pour un stage ou une opportunité junior
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Je transforme des idées en{' '}
          <span className="blue-text">expériences web modernes.</span>
        </h1>
        <p className="muted mt-6 max-w-2xl text-base leading-8 sm:text-lg">
          Développeuse Full Stack basée à Marrakech, spécialisée en React.js, Django,
          Python, PHP et bases de données. Je conçois des interfaces modernes et des
          applications web fonctionnelles, performantes et centrées sur l’utilisateur.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projets" className="primary-button">
            <FiFolder aria-hidden="true" />
            Voir mes projets
          </a>
          {/* Placer le PDF final dans public/Khaoula_El_Hkim_CV.pdf pour conserver ce lien. */}
          <a href={profile.cv} download className="secondary-button">
            <FiDownload aria-hidden="true" />
            Télécharger mon CV
          </a>
        </div>
        <div className="mt-7">
          <SocialLinks />
        </div>
        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat} className="rounded-lg border border-[var(--border)] bg-white/[0.035] p-4">
              <dt className="sr-only">Indicateur</dt>
              <dd className="text-sm font-extrabold text-white">{stat}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-[440px]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="absolute inset-8 rounded-full bg-[rgba(8,123,255,0.3)] blur-3xl" />
        <div className="glass-card relative rounded-lg p-5">
          {/* Remplacer src/assets/profile.jpg par la vraie photo de profil de Khaoula. */}
          <img
            src={profileImage}
            alt="Portrait de Khaoula El Hkim"
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
          <div className="absolute -left-3 top-10 grid gap-3 sm:-left-8">
            {techBadges.slice(0, 3).map((badge) => (
              <span key={badge} className="rounded-md border border-[var(--border)] bg-[#0b1424]/95 px-3 py-2 text-xs font-extrabold text-white shadow-xl">
                {badge}
              </span>
            ))}
          </div>
          <div className="absolute -right-2 bottom-10 grid gap-3 sm:-right-8">
            {techBadges.slice(3).map((badge) => (
              <span key={badge} className="rounded-md border border-[var(--border)] bg-[#0b1424]/95 px-3 py-2 text-xs font-extrabold text-white shadow-xl">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
    <a
      href="#projets"
      className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm font-bold text-[var(--text-secondary)] md:flex"
    >
      Défiler
      <FiArrowDown aria-hidden="true" />
    </a>
  </section>
)

export default Hero
