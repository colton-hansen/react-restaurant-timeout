import {
  site,
  yandexMapEmbed,
  yandexMapsOrgUrl,
  yandexReviewsEmbed,
  yandexReviewsUrl,
} from '@/config/site'
import { useCookieConsent } from '@/lib/cookieConsent'

export function MapSection() {
  const { accepted, accept, ready } = useCookieConsent()

  return (
    <section className="mx-auto max-w-[var(--width-content)] px-4 py-16 md:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
        <div id="map" className="scroll-mt-32">
          <h2 className="mb-6 text-4xl md:text-6xl">На карте</h2>
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface">
            {ready && accepted ? (
              <iframe
                title={`Яндекс.Карты — ${site.name}`}
                src={yandexMapEmbed}
                className="h-[32rem] w-full border-0 md:h-[50rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <WidgetConsent
                ready={ready}
                onAccept={accept}
                label="Показать карту и отзывы"
              >
                Виджеты Яндекс Карт и отзывов загружаются после согласия на
                cookie — это сторонний сервис.
              </WidgetConsent>
            )}
          </div>
          <p className="mt-4 font-serif text-sm">
            <a
              href={yandexMapsOrgUrl}
              className="text-accent hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Таймаут на карте Сестрорецка — Яндекс Карты
            </a>
          </p>
        </div>

        <div id="reviews" className="scroll-mt-32">
          <h2 className="mb-6 text-4xl md:text-6xl">Отзывы</h2>
          <div className="mx-auto max-w-[560px] overflow-hidden rounded-[var(--radius-card)] bg-surface lg:mx-0">
            {ready && accepted ? (
              <iframe
                title={`Отзывы Яндекс Карт — ${site.name}`}
                src={yandexReviewsEmbed}
                className="h-[32rem] w-full border-0 md:h-[50rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <WidgetConsent
                ready={ready}
                onAccept={accept}
                label="Показать карту и отзывы"
              >
                Отзывы с карточки заведения на Яндекс Картах. Тексты не
                копируем вручную — только виджет.
              </WidgetConsent>
            )}
          </div>
          <p className="mt-4 font-serif text-sm">
            <a
              href={yandexReviewsUrl}
              className="text-accent hover:text-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Все отзывы на Яндекс Картах
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function WidgetConsent({
  ready,
  onAccept,
  label,
  children,
}: {
  ready: boolean
  onAccept: () => void
  label: string
  children: string
}) {
  return (
    <div className="flex h-[32rem] flex-col items-start justify-center gap-4 px-6 md:h-[50rem] md:px-10">
      {ready ? (
        <>
          <p className="max-w-lg font-serif text-base leading-relaxed text-muted">
            {children}
          </p>
          <button
            type="button"
            onClick={onAccept}
            className="rounded-[var(--radius-pill)] bg-accent px-10 py-3 font-display text-base uppercase tracking-[0.16em] text-white transition hover:bg-ink"
          >
            {label}
          </button>
        </>
      ) : (
        <p className="text-sm text-muted">Яндекс</p>
      )}
    </div>
  )
}
