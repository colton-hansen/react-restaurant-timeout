import { Lock, LockOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { heroGallery } from '@/config/homeGallery'
import { useUiPreferences } from '@/context/UiPreferencesContext'

const SLIDE_INTERVAL_MS = 3000

type SlideMotion = 'next' | 'prev'

export function HeroPhotoPlayer() {
  const { copy } = useUiPreferences()
  const [index, setIndex] = useState(0)
  const [motion, setMotion] = useState<SlideMotion>('next')
  const [locked, setLocked] = useState(false)

  const current = heroGallery[index]

  const goTo = (next: number) => {
    if (locked) return
    setIndex((prev) => {
      const len = heroGallery.length
      const normalized = ((next % len) + len) % len
      if (normalized === prev) return prev

      const forward = (normalized - prev + len) % len
      setMotion(forward <= len / 2 ? 'next' : 'prev')
      return normalized
    })
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
        <GrayButton arrow="left" onClick={() => goTo(index - 1)} disabled={locked}>
          {copy.buttons.galleryBack}
        </GrayButton>
        <GrayButton
          type="button"
          className={locked ? 'is-active' : undefined}
          aria-label={locked ? copy.gallery.slidePinned : copy.gallery.pinSlide}
          onClick={() => setLocked((v) => !v)}
        >
          {locked ? (
            <Lock className="ct-gray-btn__icon" aria-hidden />
          ) : (
            <LockOpen className="ct-gray-btn__icon" aria-hidden />
          )}
        </GrayButton>
        <GrayButton arrow="right" onClick={() => goTo(index + 1)} disabled={locked}>
          {copy.buttons.galleryForward}
        </GrayButton>
      </div>
    </div>
  )
}
