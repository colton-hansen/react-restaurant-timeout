import { useEffect } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { menuPhotoGallery, vkMenuStoreUrl } from '@/config/menuPhotoGallery'
import { useMenuGallery } from '@/context/MenuGalleryContext'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'

export function MenuPhotosSheet() {
  const { open, closeGallery } = useMenuGallery()
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, closeGallery])

  if (!open) return null

  return (
    <div className="ct-menu-sheet" role="presentation">
      <button
        type="button"
        className="ct-menu-sheet__backdrop"
        aria-label="Закрыть галерею меню"
        onClick={closeGallery}
      />
      <div
        className="ct-menu-sheet__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Все меню"
      >
        <div className="ct-menu-sheet__handle" aria-hidden />
        <header className="ct-menu-sheet__header">
          <GrayButton type="button" arrow="left" onClick={closeGallery}>
            Назад
          </GrayButton>
        </header>

        <div className="ct-menu-sheet__scroll">
          {menuPhotoGallery.map(({ id, src, alt }, index) => (
            <figure key={id} className="ct-menu-sheet__page">
              <img
                className="ct-menu-sheet__page-img"
                src={src}
                alt={alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>

        <footer className="ct-menu-sheet__footer">
          <a
            className="ct-menu-sheet__maps-link"
            href={vkMenuStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Витрина услуг VK
          </a>
        </footer>
      </div>
    </div>
  )
}
