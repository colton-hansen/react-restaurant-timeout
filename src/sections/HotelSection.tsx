import hotelPhoto from '@/assets/a_2.webp'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryBlock } from '@/components/ui/MenuCategoryBlock'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { hotelText, site } from '@/config/site'

const restaurantTel = site.phoneRestaurant.replace(/\D/g, '')

const hotelRatesBlock = {
  title: hotelText.lead,
  items: hotelText.rates.map(({ name, price }) => ({
    name,
    meta: price,
  })),
}

export function HotelSection() {
  return (
    <section id="hotel" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        {hotelText.title}
      </h2>

      <div className="ct-bath">
        <div className="ct-bath__copy">
          <p className="ct-prose">{hotelText.body}</p>
          <MenuCategoryBlock category={hotelRatesBlock} />
          <div className="ct-bath__actions">
            <GrayButton href={`tel:+${restaurantTel}`} arrow="right">
              Забронировать номер
            </GrayButton>
          </div>
        </div>
        <PhotoFrame className="ct-bath__media">
          <img
            className="ct-photo-frame__img"
            src={hotelPhoto}
            alt="Отель «Тайм-аут» у озера"
            loading="lazy"
          />
        </PhotoFrame>
      </div>
    </section>
  )
}
