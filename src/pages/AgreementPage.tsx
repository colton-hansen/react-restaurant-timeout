import { Link } from 'react-router-dom'
import { hours, site } from '@/config/site'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function AgreementPage() {
  useDocumentTitle('Конфиденциальность — Тайм-аут')

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 md:px-8 md:py-24">
      <Link to="/" className="font-serif text-sm text-accent hover:text-ink">
        ← На главную
      </Link>
      <h1 className="mt-6 text-4xl md:text-5xl">
        Конфиденциальность и cookie
      </h1>
      <p className="mt-6 font-serif leading-relaxed text-muted">
        Это учебный ребилд сайта ресторана «Тайм-аут», не официальный ресурс.
        Форм бронирования и сбора персональных данных здесь нет. Стол, номер и
        баню заказывают по телефону, VK или WhatsApp.
      </p>
      <section className="mt-8 space-y-4 font-serif text-sm leading-relaxed">
        <p>
          На этой копии не ведутся счётчики и аналитика. Если вы принимаете
          cookie, в браузере сохраняется отметка согласия и могут загрузиться
          виджеты Яндекс Карт и отзывов (сторонний сервис).
        </p>
        <p>
          Официальный сайт заведения:{' '}
          <a
            href={site.originalSiteUrl}
            className="text-accent hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            timeout-sestroretsk.ru
          </a>
        </p>
      </section>
      <section className="mt-10 space-y-4 font-serif text-sm">
        <p>
          {site.phoneRestaurantLabel}:{' '}
          <a
            href={site.phoneRestaurantTel}
            className="text-accent hover:text-ink"
          >
            {site.phoneRestaurant}
          </a>
        </p>
        <p>
          {site.phoneBathLabel}:{' '}
          <a href={site.phoneBathTel} className="text-accent hover:text-ink">
            {site.phoneBath}
          </a>
        </p>
        <p className="text-muted">Мы открыты ежедневно:</p>
        <ul>
          {hours.map((row) => (
            <li key={row.days}>
              {row.days} — {row.time}
            </li>
          ))}
        </ul>
        <p>{site.addressLine}</p>
      </section>
    </article>
  )
}
