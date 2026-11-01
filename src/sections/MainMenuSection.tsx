import { useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import { useMenuGallery } from '@/context/MenuGalleryContext'
import {
  mainMenuCategories,
  mainMenuColumnTitles,
  mainMenuPreviewColumnTitles,
  mainMenuPreviewMaxItems,
} from '@/config/menus/mainMenu'

export function MainMenuSection() {
  const [expanded, setExpanded] = useState(false)
  const { openGallery } = useMenuGallery()

  return (
    <section id="menu" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        Основное меню
      </h2>

      <MenuCategoryGrid
        categories={mainMenuCategories}
        columnTitleGroups={mainMenuColumnTitles}
        previewColumnTitleGroups={mainMenuPreviewColumnTitles}
        previewMaxItemsPerCategory={mainMenuPreviewMaxItems}
        showAll={expanded}
      />

      <div className="ct-section__actions">
        {!expanded ? (
          <GrayButton type="button" arrow="right" onClick={() => setExpanded(true)}>
            Показать ещё
          </GrayButton>
        ) : null}
        <GrayButton type="button" arrow="right" onClick={openGallery}>
          Все меню
        </GrayButton>
      </div>
    </section>
  )
}
