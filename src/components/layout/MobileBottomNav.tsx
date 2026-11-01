import type { CSSProperties } from 'react'
import { ClipboardList, Info, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { mobileNav, resolveMobileNavActive } from '@/config/mobileNav'
import { mainNavIdSet } from '@/config/site'
import { useHashNav } from '@/hooks/useHashNav'

const iconById: Record<(typeof mobileNav)[number]['id'], LucideIcon> = {
  about: Info,
  menu: ClipboardList,
  location: MapPin,
  contacts: Phone,
}

export function MobileBottomNav() {
  const activeId = useHashNav(
    resolveMobileNavActive,
    'about',
    mainNavIdSet,
  )
  const activeIndex = Math.max(
    0,
    mobileNav.findIndex(({ id }) => id === activeId),
  )
  const pillStyle = {
    '--ct-mobile-nav-active-index': activeIndex,
  } as CSSProperties

  return (
    <nav className="ct-mobile-nav" aria-label="Мобильная навигация">
      <div className="ct-mobile-nav__pill" style={pillStyle}>
        <span className="ct-mobile-nav__indicator" aria-hidden />
        {mobileNav.map(({ id, label }) => {
          const Icon = iconById[id]
          const active = activeId === id

          return (
            <a
              key={id}
              href={`#${id}`}
              className={`ct-mobile-nav__item${active ? ' is-active' : ''}`}
            >
              <span className="ct-mobile-nav__icon-wrap">
                <Icon className="ct-mobile-nav__icon" aria-hidden />
              </span>
              <span className="ct-mobile-nav__label">{label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
