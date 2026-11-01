import {
  YandexMapEmbed,
  YandexReviewsEmbed,
} from '@/components/embed/YandexEmbeds'
import { site } from '@/config/site'

export function LocationSection() {
  return (
    <section id="location" className="ct-anchor ct-section ct-section--wide">
      <h2 className="ct-section__title ct-section__title--caps">
        Локация и отзывы
      </h2>
      <p className="ct-prose ct-prose--muted ct-location__address">
        {site.address}
      </p>

      <div className="ct-location-grid">
        <YandexMapEmbed />
        <YandexReviewsEmbed />
      </div>
    </section>
  )
}
