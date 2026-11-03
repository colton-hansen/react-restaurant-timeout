import { useEffect, useState } from 'react'

export function useActiveSection(
  items: readonly { id: string }[],
  enabled = true,
) {
  const [active, setActive] = useState<string | null>(null)
  const key = items.map((item) => item.id).join('|')

  useEffect(() => {
    if (!enabled || items.length === 0) {
      setActive(null)
      return
    }

    const ids = key.split('|')
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }
        let next: string | null = null
        let best = 0
        for (const [id, ratio] of ratios) {
          if (ratio > best) {
            best = ratio
            next = id
          }
        }
        if (next) setActive(next)
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled, key, items.length])

  return active
}
