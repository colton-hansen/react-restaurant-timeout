import { useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import {
  mainMenuCategories,
  mainMenuColumnTitles,
  mainMenuPreviewColumnTitles,
  mainMenuPreviewTitles,
} from '@/config/menus/mainMenu'

export function MainMenuSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="menu" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        Основное меню
      </h2>

      <MenuCategoryGrid
        categories={mainMenuCategories}
        columnTitleGroups={mainMenuColumnTitles}
        previewColumnTitleGroups={mainMenuPreviewColumnTitles}
        showAll={expanded}
        previewTitles={mainMenuPreviewTitles}
      />

      <div className="ct-section__actions">
        {!expanded ? (
          <GrayButton type="button" arrow="right" onClick={() => setExpanded(true)}>
            Показать ещё
          </GrayButton>
        ) : null}
        <GrayButton href="#banquet-menu" arrow="right">
          Все меню
        </GrayButton>
      </div>
    </section>
  )
}
