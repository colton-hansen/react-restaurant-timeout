import { SiteNav } from '@/components/layout/SiteNav'
import { HomePage } from '@/pages/HomePage'
import { footerNotice } from '@/config/site'

export function SiteLayout() {
  return (
    <div className="ct-shell">
      <main className="ct-main">
        <div className="ct-page">
          <SiteNav />
          <HomePage />
        </div>
      </main>
      <footer className="ct-site-footer">{footerNotice}</footer>
    </div>
  )
}
