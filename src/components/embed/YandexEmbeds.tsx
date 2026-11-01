import { yandexEmbedUrls } from '@/config/site'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function YandexMapEmbed() {
  const { locale, copy } = useUiPreferences()
  const { mapSrc } = yandexEmbedUrls(locale)

  return (
    <iframe
      key={mapSrc}
      title={copy.yandexMapTitle}
      className="ct-yandex-embed"
      src={mapSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}

export function YandexReviewsEmbed() {
  const { locale, copy } = useUiPreferences()
  const { reviewsSrc } = yandexEmbedUrls(locale)

  return (
    <iframe
      key={reviewsSrc}
      title={copy.yandexReviewsTitle}
      className="ct-yandex-embed"
      src={reviewsSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
