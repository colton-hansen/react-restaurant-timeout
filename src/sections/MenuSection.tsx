import { useState } from 'react'
import { Lightbox } from '@/components/Lightbox'
import { MenuCategoryGrid } from '@/components/MenuCategoryGrid'
import { menuScans } from '@/config/menuGallery'
import {
  banquetMenuAltPriceHint,
  banquetMenuCategories,
  banquetMenuColumnTitles,
  banquetMenuPriceLabel,
} from '@/config/menus/banquetMenu'
import {
  mainMenuCategories,
  mainMenuColumnTitles,
  mainMenuPreviewColumnTitles,
  mainMenuPreviewMaxItems,
} from '@/config/menus/mainMenu'

export function MenuSection() {
  const [expanded, setExpanded] = useState(false)
  const [scanIndex, setScanIndex] = useState<number | null>(null)

  return (
    <section id="menu" className="scroll-mt-32 bg-paper">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-16 md:px-8 md:py-24">
        <h2 className="mb-10 text-4xl md:text-6xl">Основное меню</h2>

        <MenuCategoryGrid
          categories={mainMenuCategories}
          columnTitleGroups={mainMenuColumnTitles}
          previewColumnTitleGroups={mainMenuPreviewColumnTitles}
          previewMaxItemsPerCategory={mainMenuPreviewMaxItems}
          showAll={expanded}
        />

        <div className="mt-10">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-[var(--radius-pill)] bg-accent px-10 py-3 font-display text-base uppercase tracking-[0.16em] text-white transition hover:bg-ink"
            aria-expanded={expanded}
          >
            {expanded ? 'Свернуть' : 'Показать ещё'}
          </button>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl">Банкетное меню</h3>
          <p className="mt-3 font-display text-lg uppercase tracking-[0.08em] text-accent">
            {banquetMenuPriceLabel}
          </p>
          <p className="mt-2 font-serif text-sm text-muted">
            {banquetMenuAltPriceHint}
          </p>
          <div className="mt-8">
            <MenuCategoryGrid
              categories={banquetMenuCategories}
              columnTitleGroups={banquetMenuColumnTitles}
              previewColumnTitleGroups={banquetMenuColumnTitles}
              showAll
            />
          </div>
        </div>

        <div className="mt-16">
          <p className="mb-2 font-display text-sm uppercase tracking-[0.18em] text-muted">
            Сканы меню
          </p>
          <p className="mb-5 max-w-xl font-serif text-sm text-muted">
            Фотографии карт. Заказ через сайт не принимаем — только звонок, VK
            или WhatsApp.
          </p>
          <div className="flex flex-wrap gap-2">
            {menuScans.map((scan, index) => (
              <button
                key={scan.id}
                type="button"
                onClick={() => setScanIndex(index)}
                className="rounded-[var(--radius-pill)] bg-surface px-4 py-2 font-display text-sm uppercase tracking-[0.12em] text-ink ring-1 ring-border transition hover:text-accent"
              >
                {scan.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {scanIndex != null ? (
        <Lightbox
          pages={menuScans.map((scan) => ({
            src: scan.src,
            alt: scan.alt,
            title: scan.label,
          }))}
          startIndex={scanIndex}
          open
          onClose={() => setScanIndex(null)}
        />
      ) : null}
    </section>
  )
}
