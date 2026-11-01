import { useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import {
  banquetMenuCategories,
  banquetMenuColumnTitles,
  banquetMenuPreviewColumnTitles,
  banquetMenuPreviewTitles,
  banquetMenuPriceLabel,
} from '@/config/menus/banquetMenu'

export function BanquetMenuSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="banquet-menu" className="ct-anchor ct-section ct-section--narrow">
      <div className="ct-section__heading-row">
        <h2 className="ct-section__title ct-section__title--caps">
          Банкетное меню
        </h2>
        <p className="ct-section__price-tag">{banquetMenuPriceLabel}</p>
      </div>

      <MenuCategoryGrid
        categories={banquetMenuCategories}
        columnTitleGroups={banquetMenuColumnTitles}
        previewColumnTitleGroups={banquetMenuPreviewColumnTitles}
        showAll={expanded}
        previewTitles={banquetMenuPreviewTitles}
      />

      {!expanded ? (
        <div className="ct-section__actions">
          <GrayButton type="button" arrow="right" onClick={() => setExpanded(true)}>
            Показать ещё
          </GrayButton>
        </div>
      ) : null}
    </section>
  )
}
