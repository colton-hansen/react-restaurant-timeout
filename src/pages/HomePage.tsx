import {
  AboutSection,
  BanquetMenuSection,
  BathSection,
  ContactsSection,
  HomeSection,
  LocationSection,
  MainMenuSection,
} from '@/sections'

/** Порядок секций как на PC-макете Figma (home) */
export function HomePage() {
  return (
    <>
      <AboutSection />
      <HomeSection />
      <MainMenuSection />
      <BanquetMenuSection />
      <BathSection />
      <LocationSection />
      <ContactsSection />
    </>
  )
}
