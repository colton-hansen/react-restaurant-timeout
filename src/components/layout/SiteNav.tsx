import { mainNav, mainNavIdSet } from '@/config/site'
import { useHashNav } from '@/hooks/useHashNav'

function resolveDesktopActive(hash: string) {
  if (hash && mainNavIdSet.has(hash)) return hash
  return 'about'
}

export function SiteNav() {
  const activeId = useHashNav(resolveDesktopActive, 'about', mainNavIdSet)

  return (
    <header className="ct-nav-shell">
      <div className="ct-nav-shell__inner">
        <nav className="ct-nav" aria-label="Основная навигация">
          {mainNav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`ct-nav__link${activeId === id ? ' is-active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
