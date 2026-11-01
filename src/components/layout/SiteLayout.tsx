import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { SiteNav } from '@/components/layout/SiteNav'
import { MenuPhotosSheet } from '@/components/ui/MenuPhotosSheet'
import { MenuGalleryProvider } from '@/context/MenuGalleryContext'
import { HomePage } from '@/pages/HomePage'
import { footerNotice } from '@/config/site'

export function SiteLayout() {
  return (
    <MenuGalleryProvider>
      <div className="ct-shell">
        <main className="ct-main">
          <div className="ct-page">
            <SiteNav />
            <HomePage />
          </div>
        </main>
        <footer className="ct-site-footer">{footerNotice}</footer>
        <MobileBottomNav />
        <MenuPhotosSheet />
      </div>
    </MenuGalleryProvider>
  )
}
