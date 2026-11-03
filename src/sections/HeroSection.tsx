import heroLake from '@/assets/a_1.webp'
import { PillButton } from '@/components/PillButton'
import { hours, site } from '@/config/site'

export function HeroSection() {
  return (
    <section>
      <div className="relative h-[min(70vh,38rem)] w-full overflow-hidden">
        <img
          src={heroLake}
          alt="Ресторан Тайм-аут у озера"
          className="size-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto -mt-28 max-w-[var(--width-content)] px-4 md:-mt-36 md:px-8">
        <div className="grid rounded-[var(--radius-card)] bg-surface md:grid-cols-2">
          <div className="px-6 py-8 md:px-12 md:py-12">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">
              {site.heroSubtitle}
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl">{site.heroTitle}</h1>
            <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-8">
              <PillButton href={site.phoneRestaurantTel}>
                Забронировать стол
              </PillButton>
            </div>
          </div>
          <div className="border-t border-border px-6 py-8 md:border-l md:border-t-0 md:px-12 md:py-12">
            <h2 className="text-3xl md:text-4xl">Часы работы</h2>
            <ul className="mt-5 space-y-2 font-serif text-muted">
              {hours.map((row) => (
                <li key={row.days} className="flex gap-2">
                  <span>{row.days}</span>
                  <span className="min-w-0 flex-1 border-b border-dotted border-border" />
                  <span className="shrink-0">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-serif text-sm text-muted">{site.address}</p>
            <p className="mt-2">
              <a
                href={site.phoneRestaurantTel}
                className="font-serif text-accent hover:text-ink"
              >
                {site.phoneRestaurant}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
