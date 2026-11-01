import {
  AboutSection,
  BanquetMenuSection,
  HotelSection,
  BathSection,
  ContactsSection,
  LocationSection,
  MainMenuSection,
} from '@/sections'

/** Порядок секций как на PC-макете Figma (home) */
export function HomePage() {
  return (
    <>
      <AboutSection />
      <MainMenuSection />
      <BanquetMenuSection />
      <HotelSection />
      <BathSection />
      <LocationSection />
      <ContactsSection />
    </>
  )
}
