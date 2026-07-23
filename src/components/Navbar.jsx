import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolioData'

const ids = navLinks.map((link) => link.href.replace('#', ''))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('accueil')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
      const current = ids.findLast((id) => {
        const element = document.getElementById(id)
        return element && element.getBoundingClientRect().top <= 140
      })
      if (current) setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      localStorage.setItem('portfolio-theme', next)
      return next
    })
  }

  const linkClass = (id) =>
    `relative rounded-full px-3 py-2 text-sm font-bold transition ${
      active === id ? 'text-white' : 'text-[var(--text-2)] hover:text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-4">
      <nav
        className={`page-shell relative flex h-14 items-center justify-between rounded-full border px-2 pl-4 transition sm:h-16 sm:px-3 sm:pl-5 ${
          scrolled
            ? 'border-[var(--border)] bg-[var(--nav-bg)] shadow-2xl shadow-black/25 backdrop-blur-xl'
            : 'border-[var(--border)] bg-[var(--nav-bg-soft)] backdrop-blur-md'
        }`}
      >
        <a href="#accueil" className="max-w-[13rem] truncate text-xs font-extrabold tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.2em]">
          {profile.logo}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <a key={link.href} href={link.href} className={linkClass(id)}>
                {link.label}
                {active === id && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--blue-3)] shadow-[0_0_16px_var(--blue)]"
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a href={profile.cv} download className="nav-download primary-button text-sm">
            <FiDownload aria-hidden="true" />
            Download CV
          </a>

          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute inset-x-0 top-[calc(100%+10px)] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--nav-bg)] p-3 shadow-2xl backdrop-blur-xl sm:p-4 lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-bold text-[var(--text-2)] hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a href={profile.cv} download className="primary-button mt-3 w-full text-sm">
                <FiDownload aria-hidden="true" />
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
