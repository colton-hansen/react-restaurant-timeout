import { NavPreferences } from '@/components/layout/NavPreferences'
import { mainNav, mainNavIdSet } from '@/config/site'
import { useUiPreferences } from '@/context/UiPreferencesContext'
import { useHashNav } from '@/hooks/useHashNav'

function resolveDesktopActive(hash: string) {
  if (hash && mainNavIdSet.has(hash)) return hash
  return 'about'
}

export function SiteNav() {
  const activeId = useHashNav(resolveDesktopActive, 'about', mainNavIdSet)
  const { copy } = useUiPreferences()

  return (
    <header className="ct-nav-shell">
      <div className="ct-nav-shell__inner">
        <div className="ct-nav-bar">
          <nav className="ct-nav" aria-label={copy.navAriaLabel}>
            {mainNav.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`ct-nav__link${activeId === id ? ' is-active' : ''}`}
              >
                {copy.nav[id as keyof typeof copy.nav] ?? label}
              </a>
            ))}
          </nav>
          <NavPreferences />
        </div>
      </div>
    </header>
  )
}
