import bathPhoto from '@/assets/bath.jpg'
import { PillButton } from '@/components/PillButton'
import { bathText, site } from '@/config/site'

export function BathSection() {
  return (
    <section id="bath" className="scroll-mt-32 bg-paper">
      <div className="mx-auto grid max-w-[var(--width-content)] items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl">{bathText.title}</h2>
          <p className="mt-3 font-serif text-lg italic text-muted">
            {bathText.lead}
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {bathText.amenities.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-card)] bg-surface px-4 py-3 font-display text-sm uppercase tracking-[0.1em] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-base leading-relaxed text-muted">
            {bathText.body}
          </p>
          <div className="mt-8">
            <PillButton href={site.phoneBathTel}>Забронировать баню</PillButton>
          </div>
        </div>
        <img
          src={bathPhoto}
          alt="Банный комплекс Тайм-аут"
          className="aspect-[5/4] w-full rounded-[var(--radius-card)] object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}
