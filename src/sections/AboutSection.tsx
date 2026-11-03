import aboutHall from '@/assets/a_2.webp'
import aboutLake from '@/assets/a_1.webp'
import aboutView from '@/assets/a_3.webp'
import { Music, Sparkles, Users, Waves } from 'lucide-react'
import { aboutFacts, aboutText, bathText } from '@/config/site'

const facts = [
  { icon: Users, label: aboutFacts[0] },
  { icon: Music, label: aboutFacts[1] },
  { icon: Sparkles, label: aboutFacts[2] },
  { icon: Waves, label: bathText.title },
] as const

const gallery = [
  { src: aboutLake, alt: 'Ресторан Тайм-аут у озера', label: 'Ресторан' },
  { src: aboutHall, alt: 'Зал ресторана Тайм-аут', label: 'Зал' },
  { src: aboutView, alt: 'Вид с территории у Сестрорецкого разлива', label: 'Территория' },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="mx-auto grid max-w-[var(--width-content)] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <svg viewBox="0 0 320 400" className="size-full" aria-hidden>
            <defs>
              <clipPath id="about-oval">
                <ellipse
                  cx="160"
                  cy="200"
                  rx="118"
                  ry="156"
                  transform="rotate(-14 160 200)"
                />
              </clipPath>
            </defs>
            <ellipse
              cx="160"
              cy="200"
              rx="128"
              ry="166"
              transform="rotate(-14 160 200)"
              fill="#edebe8"
            />
            <image
              href={aboutHall}
              width="320"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#about-oval)"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl">О нас</h2>
          <p className="mt-6 font-serif text-base leading-relaxed text-muted">
            {aboutText}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[var(--width-content)] gap-8 px-4 pb-16 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {facts.map(({ icon: Icon, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto size-8 text-muted/45" strokeWidth={1.25} aria-hidden />
            <p className="mt-3 font-display text-lg uppercase tracking-[0.08em] text-ink">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3">
        {gallery.map((photo) => (
          <figure key={photo.label} className="relative min-h-64 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              className="size-full min-h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink/45 px-4 py-4 font-display text-2xl uppercase tracking-[0.12em] text-white">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
