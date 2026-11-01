import bathPhoto from '@/assets/bath.jpg'
import { GrayButton } from '@/components/ui/GrayButton'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { bathText } from '@/config/site'

export function BathSection() {
  return (
    <section id="bath" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        {bathText.title}
      </h2>

      <div className="ct-bath">
        <div className="ct-bath__copy">
          <p className="ct-prose ct-prose--muted">{bathText.lead}</p>
          <p className="ct-prose">{bathText.body}</p>
          <div className="ct-bath__actions">
            <GrayButton href="#contacts" arrow="right">
              Забронировать баню
            </GrayButton>
          </div>
        </div>
        <PhotoFrame className="ct-bath__media">
          <img
            className="ct-photo-frame__img"
            src={bathPhoto}
            alt="Банный комплекс «Тайм-аут»"
            loading="lazy"
          />
        </PhotoFrame>
      </div>
    </section>
  )
}
