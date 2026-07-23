import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, profile, socials } from '../data/portfolioData'

const Footer = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12">
    <div className="page-shell">
      <div className="text-center">
        <h2 className="blue-gradient-text text-[clamp(2rem,10vw,3.6rem)] font-extrabold tracking-[0.04em] sm:tracking-[0.08em]">
          KHAOULA EL HKIM
        </h2>
        <p className="muted mt-4 text-base font-bold sm:text-lg">Full Stack Developer</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-bold text-[var(--text-2)] hover:text-white">
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} className="icon-button" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="muted mx-auto mt-8 grid max-w-full justify-items-center gap-4 break-words text-center text-sm font-bold sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
        <a href={`mailto:${profile.email}`} className="inline-flex min-w-0 items-center gap-2">
          <FiMail className="shrink-0" />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="inline-flex min-w-0 items-center gap-2">
          <FiPhone className="shrink-0" />
          {profile.phone}
        </a>
        <span className="inline-flex min-w-0 items-center gap-2">
          <FiMapPin className="shrink-0" />
          {profile.location}
        </span>
      </div>

      <p className="soft-muted mt-8 text-center text-sm">&copy; 2026 Khaoula El Hkim. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
