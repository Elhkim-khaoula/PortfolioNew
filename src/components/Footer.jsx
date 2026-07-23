import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, profile, socials } from '../data/portfolioData'

const Footer = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-12">
    <div className="page-shell">
      <div className="text-center">
        <h2 className="blue-gradient-text text-4xl font-extrabold tracking-[0.08em] sm:text-6xl">
          KHAOULA EL HKIM
        </h2>
        <p className="muted mt-4 text-lg font-bold">Full Stack Developer</p>
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
      <div className="muted mt-8 flex flex-wrap justify-center gap-5 text-sm font-bold">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2"><FiMail />{profile.email}</a>
        <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2"><FiPhone />{profile.phone}</a>
        <span className="inline-flex items-center gap-2"><FiMapPin />{profile.location}</span>
      </div>
      <p className="soft-muted mt-8 text-center text-sm">© 2026 Khaoula El Hkim. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
