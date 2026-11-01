import { useEffect, useState } from 'react'

function readHash() {
  return window.location.hash.replace('#', '')
}

export function useHashNav(
  resolveActive: (hash: string) => string,
  defaultId: string,
  validForInit: Set<string>,
) {
  const [activeId, setActiveId] = useState(defaultId)

  useEffect(() => {
    const sync = () => setActiveId(resolveActive(readHash()))

    const hash = readHash()
    if (!hash || !validForInit.has(hash)) {
      window.history.replaceState(null, '', `#${defaultId}`)
    }

    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
    // resolveActive и validForInit — стабильные ссылки из модуля
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hash listener only
  }, [defaultId])

  return activeId
}
