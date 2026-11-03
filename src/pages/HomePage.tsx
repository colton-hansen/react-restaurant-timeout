import { AboutSection } from '@/sections/AboutSection'
import { BathSection } from '@/sections/BathSection'
import { HeroSection } from '@/sections/HeroSection'
import { HotelSection } from '@/sections/HotelSection'
import { MapSection } from '@/sections/MapSection'
import { MenuSection } from '@/sections/MenuSection'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function HomePage() {
  useDocumentTitle('Ресторан Тайм-аут')

  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <HotelSection />
      <BathSection />
      <MapSection />
    </>
  )
}
