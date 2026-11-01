import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { SiteNav } from '@/components/layout/SiteNav'
import { MenuPhotosSheet } from '@/components/ui/MenuPhotosSheet'
import { MobileSettingsSheet } from '@/components/ui/MobileSettingsSheet'
import { MenuGalleryProvider } from '@/context/MenuGalleryContext'
import { MobileSettingsProvider } from '@/context/MobileSettingsContext'
import { UiPreferencesProvider } from '@/context/UiPreferencesContext'
import { HomePage } from '@/pages/HomePage'
import { SiteFooter } from '@/components/layout/SiteFooter'

export function SiteLayout() {
  return (
    <UiPreferencesProvider>
      <MenuGalleryProvider>
        <MobileSettingsProvider>
          <div className="ct-shell">
            <main className="ct-main">
              <div className="ct-page">
                <SiteNav />
                <HomePage />
              </div>
            </main>
            <SiteFooter />
            <MobileBottomNav />
            <MenuPhotosSheet />
            <MobileSettingsSheet />
          </div>
        </MobileSettingsProvider>
      </MenuGalleryProvider>
    </UiPreferencesProvider>
  )
}
