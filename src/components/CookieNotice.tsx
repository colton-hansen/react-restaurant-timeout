import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { cookieText } from '@/config/site'
import { useCookieConsent } from '@/lib/cookieConsent'

export function CookieNotice() {
  const { accepted, accept, ready } = useCookieConsent()
  const ref = useRef<HTMLDivElement>(null)
  const visible = ready && !accepted

  useEffect(() => {
    const root = document.documentElement
    if (!visible) {
      root.style.setProperty('--cookie-offset', '0px')
      return
    }
    const el = ref.current
    if (!el) return
    const sync = () =>
      root.style.setProperty('--cookie-offset', `${el.offsetHeight}px`)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => {
      observer.disconnect()
      root.style.setProperty('--cookie-offset', '0px')
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface p-4 md:p-6"
      role="region"
      aria-label="Уведомление о cookie"
    >
      <div className="mx-auto flex max-w-[var(--width-content)] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl font-serif text-sm leading-relaxed text-muted">
          {cookieText}{' '}
          <Link to="/agreement" className="text-accent hover:text-ink">
            Подробнее
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-[var(--radius-pill)] bg-accent px-8 py-2.5 font-display text-sm uppercase tracking-[0.16em] text-white transition hover:bg-ink"
        >
          Хорошо, больше не показывать
        </button>
      </div>
    </div>
  )
}
