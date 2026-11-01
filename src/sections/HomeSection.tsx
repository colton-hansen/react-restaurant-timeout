import { Lock, LockOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { heroGallery } from '@/config/homeGallery'

const SLIDE_INTERVAL_MS = 3000

export function HomeSection() {
  const [index, setIndex] = useState(0)
  const [locked, setLocked] = useState(false)
  const current = heroGallery[index]

  const go = (next: number) => {
    if (locked) return
    setIndex((next + heroGallery.length) % heroGallery.length)
  }

  useEffect(() => {
    if (locked) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroGallery.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [locked])

  return (
    <section id="home" className="ct-anchor ct-section">
      <div className="ct-photo-player">
        <PhotoFrame className="ct-photo-player__display">
          <img
            className="ct-photo-frame__img"
            src={current.src}
            alt={current.alt}
          />
        </PhotoFrame>

        <div className="ct-photo-player__controls">
          <GrayButton arrow="left" onClick={() => go(index - 1)} disabled={locked}>
            Назад
          </GrayButton>
          <GrayButton
            type="button"
            className={locked ? 'is-active' : undefined}
            aria-label={locked ? 'Слайд закреплён' : 'Закрепить слайд'}
            onClick={() => setLocked((v) => !v)}
          >
            {locked ? (
              <Lock className="ct-gray-btn__icon" aria-hidden />
            ) : (
              <LockOpen className="ct-gray-btn__icon" aria-hidden />
            )}
          </GrayButton>
          <GrayButton arrow="right" onClick={() => go(index + 1)} disabled={locked}>
            Вперёд
          </GrayButton>
        </div>
      </div>
    </section>
  )
}
