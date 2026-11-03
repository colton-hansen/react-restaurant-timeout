import {
  dishGalleryCredit,
  dishGalleryNote,
  dishPhotos,
} from '@/config/dishGallery'

export function DishGallery() {
  return (
    <div className="mb-12">
      <p className="mb-5 max-w-2xl font-serif text-sm text-muted">
        {dishGalleryNote}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {dishPhotos.map((photo) => (
          <figure
            key={photo.id}
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink/45 px-4 py-3 font-display text-xl uppercase tracking-[0.12em] text-white">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 font-serif text-xs text-muted">
        {dishGalleryCredit.prefix}
        <a
          href={dishGalleryCredit.href}
          className="text-accent hover:text-ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {dishGalleryCredit.linkLabel}
        </a>
      </p>
    </div>
  )
}
