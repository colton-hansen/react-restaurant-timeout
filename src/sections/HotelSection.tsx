import hotelPhoto from '@/assets/a_2.webp'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryBlock } from '@/components/ui/MenuCategoryBlock'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { site } from '@/config/site'
import { useUiPreferences } from '@/context/UiPreferencesContext'

const restaurantTel = site.phoneRestaurant.replace(/\D/g, '')

export function HotelSection() {
  const { copy } = useUiPreferences()

  const hotelRatesBlock = {
    title: copy.hotelRatesTitle,
    items: copy.hotelRates.map(({ name, price }) => ({
      name,
      meta: price,
    })),
  }

  return (
    <section id="hotel" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        {copy.sectionTitles.hotel}
      </h2>

      <div className="ct-bath">
        <div className="ct-bath__copy">
          <p className="ct-prose">{copy.hotelBody}</p>
          <MenuCategoryBlock category={hotelRatesBlock} />
          <div className="ct-bath__actions">
            <GrayButton href={`tel:+${restaurantTel}`} arrow="right">
              {copy.buttons.bookRoom}
            </GrayButton>
          </div>
        </div>
        <PhotoFrame className="ct-bath__media">
          <img
            className="ct-photo-frame__img"
            src={hotelPhoto}
            alt=""
            loading="lazy"
          />
        </PhotoFrame>
      </div>
    </section>
  )
}
