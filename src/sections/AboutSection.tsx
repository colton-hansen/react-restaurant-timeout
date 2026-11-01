import { HeroPhotoPlayer } from '@/components/ui/HeroPhotoPlayer'
import { GrayButton } from '@/components/ui/GrayButton'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function AboutSection() {
  const { copy } = useUiPreferences()

  return (
    <section id="about" className="ct-anchor ct-section">
      <div className="ct-about">
        <div className="ct-about__main">
          <h2 className="ct-section__title ct-section__title--caps">
            {copy.sectionTitles.about}
          </h2>
          <p className="ct-prose">{copy.aboutBody}</p>
          <div className="ct-about__actions">
            <GrayButton href="#hotel">{copy.buttons.bookRoom}</GrayButton>
            <GrayButton href="#menu" arrow="right">
              {copy.buttons.mainMenu}
            </GrayButton>
            <GrayButton href="#banquet-menu" arrow="right">
              {copy.buttons.banquetMenu}
            </GrayButton>
          </div>
        </div>
        <div className="ct-about__gallery">
          <HeroPhotoPlayer />
        </div>
      </div>
    </section>
  )
}
