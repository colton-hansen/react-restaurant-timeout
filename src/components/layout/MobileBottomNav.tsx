import type { CSSProperties } from 'react'
import { ClipboardList, Info, MapPin, Phone, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { mobileNav, resolveMobileNavActive } from '@/config/mobileNav'
import { mainNavIdSet } from '@/config/site'
import { useMobileSettings } from '@/context/MobileSettingsContext'
import { useUiPreferences } from '@/context/UiPreferencesContext'
import { useHashNav } from '@/hooks/useHashNav'

const iconById: Record<(typeof mobileNav)[number]['id'], LucideIcon> = {
  about: Info,
  menu: ClipboardList,
  location: MapPin,
  contacts: Phone,
}

export function MobileBottomNav() {
  const { copy } = useUiPreferences()
  const { open, openSettings, closeSettings } = useMobileSettings()
  const activeId = useHashNav(
    resolveMobileNavActive,
    'about',
    mainNavIdSet,
  )
  const activeIndex = Math.max(
    0,
    mobileNav.findIndex(({ id }) => id === activeId),
  )
  const trackStyle = {
    '--ct-mobile-nav-active-index': activeIndex,
  } as CSSProperties

  return (
    <nav className="ct-mobile-nav" aria-label={copy.mobileNavAriaLabel}>
      <div className="ct-mobile-nav__bar">
        <div className="ct-mobile-nav__pill" style={trackStyle}>
          <span className="ct-mobile-nav__indicator" aria-hidden />
          {mobileNav.map(({ id }) => {
            const Icon = iconById[id]
            const active = activeId === id && !open
            const label = copy.mobileNav[id]

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
        <button
          type="button"
          className={`ct-mobile-nav__pill ct-mobile-nav__pill--settings${open ? ' is-active' : ''}`}
          aria-label={copy.mobileNav.settings}
          aria-expanded={open}
          onClick={() => (open ? closeSettings() : openSettings())}
        >
          <span className="ct-mobile-nav__icon-wrap">
            <Settings className="ct-mobile-nav__icon" aria-hidden />
          </span>
          <span className="ct-mobile-nav__label">{copy.mobileNav.settings}</span>
        </button>
      </div>
    </nav>
  )
}
