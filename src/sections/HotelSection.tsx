import hotelPhoto from '@/assets/a_3.webp'
import { PillButton } from '@/components/PillButton'
import { hotelText, site } from '@/config/site'

export function HotelSection() {
  return (
    <section
      id="hotel"
      className="mx-auto max-w-[var(--width-content)] scroll-mt-32 px-4 py-16 md:px-8 md:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure>
          <img
            src={hotelPhoto}
            alt="Вид с территории у Сестрорецкого разлива"
            className="aspect-[5/4] w-full rounded-[var(--radius-card)] object-cover"
            loading="lazy"
          />
          <figcaption className="mt-3 font-serif text-sm text-muted">
            {hotelText.photoCaption}
          </figcaption>
        </figure>
        <div>
          <h2 className="text-4xl md:text-6xl">{hotelText.title}</h2>
          <p className="mt-3 font-serif text-lg italic text-muted">
            {hotelText.lead}
          </p>
          <p className="mt-4 font-serif text-base leading-relaxed text-muted">
            {hotelText.body}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {hotelText.rates.map((rate) => (
              <li
                key={rate.name}
                className="rounded-[var(--radius-card)] bg-surface px-5 py-6"
              >
                <p className="font-display text-lg uppercase tracking-[0.08em] text-ink">
                  {rate.name}
                </p>
                <p className="mt-2 font-serif text-lg text-accent">{rate.price}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PillButton href={site.phoneRestaurantTel}>
              Забронировать номер
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}
