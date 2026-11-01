import { Phone } from 'lucide-react'
import { socialLinks } from '@/config/site'

type SocialLinksProps = {
  className?: string
  compact?: boolean
}

export function SocialLinks({ className, compact = false }: SocialLinksProps) {
  const classes = ['ct-social-links', compact ? 'ct-social-links--compact' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {socialLinks.map(({ id, label, href, shortLabel, displayLabel }) => (
        <a
          key={id}
          className={`ct-social-links__item ct-social-links__item--${id}`}
          href={href}
          {...(href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          aria-label={label}
        >
          {compact && id === 'phone' ? (
            <Phone className="ct-social-links__icon" aria-hidden />
          ) : (
            <span className="ct-social-links__text">
              {compact ? shortLabel : displayLabel}
            </span>
          )}
        </a>
      ))}
    </div>
  )
}
