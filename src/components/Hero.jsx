import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiFolder } from 'react-icons/fi'
import profileImage from '../assets/profile.png'
import MagneticButton from './MagneticButton'
import { profile, socials } from '../data/portfolioData'

const floating = ['React.js', 'Django', 'Python', 'SQL', '7 completed projects']

const Hero = () => {
  const reduceMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMouseMove = (event) => {
    if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    setTilt({
      x: (event.clientX - rect.left - rect.width / 2) / 38,
      y: (event.clientY - rect.top - rect.height / 2) / 38,
    })
  }

  return (
    <section id="accueil" className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-screen lg:pt-32">
      <div className="page-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 sm:gap-14 sm:py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p className="section-kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Full Stack Developer
          </motion.p>
          <div className="mt-6 overflow-hidden">
            <motion.h1
              className="max-w-4xl text-[clamp(2.25rem,12vw,3.4rem)] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
              initial={{ y: 90 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I build modern, functional <span className="blue-gradient-text">digital experiences</span>.
            </motion.h1>
          </div>
          <motion.p
            className="muted mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            I am Khaoula El Hkim, a Full Stack Developer based in Marrakech. I design and build modern web applications with React.js, Django, Python, PHP, and SQL.
          </motion.p>
          <motion.div
            className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
              <MagneticButton href="#projets" className="primary-button">
                <FiFolder aria-hidden="true" />
                Explore my projects
              </MagneticButton>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
              <MagneticButton href={profile.cv} download className="secondary-button">
                <FiDownload aria-hidden="true" />
                Download my CV
              </MagneticButton>
            </motion.div>
          </motion.div>
          <motion.div className="mt-7 flex gap-3" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="icon-button" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[330px] sm:max-w-[470px]"
          onMouseMove={onMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ rotateX: -tilt.y, rotateY: tilt.x }}
        >
          <div className="pulse-ring absolute inset-5 rounded-full border border-[rgba(164,222,255,0.42)] shadow-[0_0_80px_var(--glow)] sm:inset-8" />
          <div className="spin-slow absolute inset-1 rounded-[44%_56%_54%_46%] border border-dashed border-[rgba(77,184,255,0.34)] sm:inset-2" />
          <div className="absolute inset-10 rounded-full bg-[rgba(77,184,255,0.2)] blur-3xl sm:inset-14" />
          <div className="futuristic-card relative mx-auto aspect-square max-w-[280px] rounded-[42%_58%_52%_48%] p-4 sm:max-w-[390px] sm:p-5">
            <img src={profileImage} alt="Portrait of Khaoula El Hkim" className="h-full w-full rounded-[38%_62%_50%_50%] object-cover" />
          </div>
          {floating.map((item, index) => (
            <motion.span
              key={item}
              className="float-slow theme-chip absolute max-w-[9.5rem] rounded-2xl border border-[var(--border)] px-3 py-2 text-center text-[0.7rem] font-extrabold text-white shadow-[0_14px_40px_rgba(77,184,255,0.13)] backdrop-blur sm:max-w-none sm:px-4 sm:text-sm"
              style={{
                left: ['0%', '62%', '0%', '62%', '23%'][index],
                top: ['12%', '14%', '66%', '68%', '88%'][index],
                animationDelay: `${index * 0.4}s`,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 + index * 0.08 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <a href="#technologies" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-2)] md:flex">
        Scroll
        <FiArrowDown className="animate-bounce text-[var(--blue-3)]" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
