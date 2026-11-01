import { useEffect, useState } from 'react'
import { mainNav } from '@/config/site'

const navIds = new Set(mainNav.map((item) => item.id))

function readHashId() {
  return window.location.hash.replace('#', '')
}

function resolveActiveId(): string {
  const hash = readHashId()
  if (hash && navIds.has(hash)) return hash
  return 'about'
}

export function SiteNav() {
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const sync = () => setActiveId(resolveActiveId())

    const hash = readHashId()
    if (!hash || !navIds.has(hash)) {
      window.history.replaceState(null, '', '#about')
    }

    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

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
