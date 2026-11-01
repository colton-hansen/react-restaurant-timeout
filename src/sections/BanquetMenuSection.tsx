import { useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import {
  banquetMenuCategories,
  banquetMenuColumnTitles,
  banquetMenuMobilePreviewTitles,
  banquetMenuPriceLabel,
} from '@/config/menus/banquetMenu'
import { useMaxWidth } from '@/hooks/useMaxWidth'

const MOBILE_BP = 767

export function BanquetMenuSection() {
  const isMobile = useMaxWidth(MOBILE_BP)
  const [expanded, setExpanded] = useState(false)
  const showAll = !isMobile || expanded

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
        showAll={showAll}
        previewTitles={banquetMenuMobilePreviewTitles}
      />

      {isMobile && !expanded ? (
        <div className="ct-section__actions">
          <GrayButton type="button" arrow="right" onClick={() => setExpanded(true)}>
            Показать ещё
          </GrayButton>
        </div>
      ) : null}
    </section>
  )
}
