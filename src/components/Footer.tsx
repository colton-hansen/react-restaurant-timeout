import { Link } from 'react-router-dom'
import { BrandMark } from '@/components/BrandMark'
import { footerNotice, hours, site, socialLinks } from '@/config/site'

export function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-32 bg-paper">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <BrandMark />
            <h2 className="mt-6 text-3xl">Контакты</h2>
            <p className="mt-4 font-serif text-sm leading-relaxed text-muted">
              {site.addressLine}
            </p>
          </div>
          <div>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.18em] text-ink">
              Телефоны
            </p>
            <p className="font-serif text-sm">
              {site.phoneRestaurantLabel}:{' '}
              <a
                href={site.phoneRestaurantTel}
                className="text-accent hover:text-ink"
              >
                {site.phoneRestaurant}
              </a>
            </p>
            <p className="mt-2 font-serif text-sm">
              {site.phoneBathLabel}:{' '}
              <a href={site.phoneBathTel} className="text-accent hover:text-ink">
                {site.phoneBath}
              </a>
            </p>
            <p className="mt-8 mb-3 font-display text-sm uppercase tracking-[0.18em] text-ink">
              Режим работы
            </p>
            <p className="font-serif text-sm text-muted">Мы открыты ежедневно:</p>
            <ul className="mt-2 space-y-1 font-serif text-sm">
              {hours.map((row) => (
                <li key={row.days}>
                  {row.days} — {row.time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.18em] text-ink">
              Соцсети
            </p>
            <ul className="space-y-2 font-serif text-sm">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-accent hover:text-ink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                to="/agreement"
                className="font-serif text-sm text-accent hover:text-ink"
              >
                Конфиденциальность и cookie
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-14 max-w-2xl font-serif text-xs leading-relaxed text-muted">
          {footerNotice}{' '}
          <a
            href={site.originalSiteUrl}
            className="text-accent hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Оригинальный сайт
          </a>
        </p>
      </div>
    </footer>
  )
}
