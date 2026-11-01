import bathPhoto from '@/assets/bath.jpg'
import { GrayButton } from '@/components/ui/GrayButton'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function BathSection() {
  const { copy } = useUiPreferences()

  return (
    <section id="bath" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        {copy.sectionTitles.bath}
      </h2>

      <div className="ct-bath">
        <div className="ct-bath__copy">
          <p className="ct-prose ct-prose--muted">{copy.bathLead}</p>
          <p className="ct-prose">{copy.bathBody}</p>
          <div className="ct-bath__actions">
            <GrayButton href="#contacts" arrow="right">
              {copy.buttons.bookBath}
            </GrayButton>
          </div>
        </div>
        <PhotoFrame className="ct-bath__media">
          <img
            className="ct-photo-frame__img"
            src={bathPhoto}
            alt=""
            loading="lazy"
          />
        </PhotoFrame>
      </div>
    </section>
  )
}
