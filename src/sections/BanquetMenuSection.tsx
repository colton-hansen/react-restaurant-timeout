import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import {
  banquetMenuCategories,
  banquetMenuColumnTitles,
  banquetMenuPriceLabel,
} from '@/config/menus/banquetMenu'

export function BanquetMenuSection() {
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
      />
    </section>
  )
}
