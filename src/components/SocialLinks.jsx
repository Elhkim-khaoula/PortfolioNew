import { socialLinks } from '../data/portfolioData'

const SocialLinks = ({ compact = false }) => (
  <div className="flex flex-wrap items-center gap-3">
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        className={compact ? 'icon-button' : 'secondary-button'}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        aria-label={label}
        title={label}
      >
        <Icon aria-hidden="true" />
        {!compact && <span>{label}</span>}
      </a>
    ))}
  </div>
)

export default SocialLinks
