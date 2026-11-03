import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CookieNotice } from '@/components/CookieNotice'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      if (pathname !== '/') return
      const id = decodeURIComponent(hash.replace('#', ''))
      const scroll = () => document.getElementById(id)?.scrollIntoView()
      scroll()
      const frame = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export function SiteLayout() {
  return (
    <div
      className="relative min-h-dvh"
      style={{ paddingBottom: 'var(--cookie-offset, 0px)' }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
      >
        К основному содержимому
      </a>
      <Header />
      <ScrollToHash />
      <main id="main" className="relative" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  )
}
