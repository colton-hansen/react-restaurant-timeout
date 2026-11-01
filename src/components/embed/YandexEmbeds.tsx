import { yandexEmbeds } from '@/config/site'

export function YandexMapEmbed() {
  return (
    <iframe
      key={yandexEmbeds.mapSrc}
      title="Яндекс.Карты — Тайм-аут"
      className="ct-yandex-embed"
      src={yandexEmbeds.mapSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}

export function YandexReviewsEmbed() {
  return (
    <iframe
      key={yandexEmbeds.reviewsSrc}
      title="Отзывы — Яндекс"
      className="ct-yandex-embed"
      src={yandexEmbeds.reviewsSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
