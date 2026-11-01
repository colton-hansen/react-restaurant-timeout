import { Lock, LockOpen } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { heroGallery } from '@/config/homeGallery'

const SLIDE_INTERVAL_MS = 3000

type SlideMotion = 'next' | 'prev'

export function HomeSection() {
  const [index, setIndex] = useState(0)
  const [motion, setMotion] = useState<SlideMotion>('next')
  const [locked, setLocked] = useState(false)
  const indexRef = useRef(index)
  indexRef.current = index

  const current = heroGallery[index]

  const go = (next: number) => {
    if (locked) return
    const len = heroGallery.length
    const normalized = ((next % len) + len) % len
    const prev = indexRef.current
    if (normalized === prev) return

    const forward = (normalized - prev + len) % len
    setMotion(forward <= len / 2 ? 'next' : 'prev')
    setIndex(normalized)
  }

  useEffect(() => {
    if (locked) return

    const id = window.setInterval(() => {
      setMotion('next')
      setIndex((i) => (i + 1) % heroGallery.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [locked])

  return (
    <section id="home" className="ct-anchor ct-section">
      <div className="ct-photo-player">
        <PhotoFrame className="ct-photo-player__display">
          <div className="ct-photo-player__stage">
            <img
              key={current.src}
              className={`ct-photo-frame__img ct-photo-player__slide ct-photo-player__slide--${motion}`}
              src={current.src}
              alt={current.alt}
            />
          </div>
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
