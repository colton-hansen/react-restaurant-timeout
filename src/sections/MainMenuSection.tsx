import { useState } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import { useMenuGallery } from '@/context/MenuGalleryContext'
import { useUiPreferences } from '@/context/UiPreferencesContext'
import {
  mainMenuCategories,
  mainMenuColumnTitles,
  mainMenuPreviewColumnTitles,
  mainMenuPreviewMaxItems,
} from '@/config/menus/mainMenu'

export function MainMenuSection() {
  const [expanded, setExpanded] = useState(false)
  const { openGallery } = useMenuGallery()
  const { copy } = useUiPreferences()

  return (
    <section id="menu" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        {copy.sectionTitles.menu}
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
            {copy.buttons.showMore}
          </GrayButton>
        ) : null}
        <GrayButton type="button" arrow="right" onClick={openGallery}>
          {copy.buttons.allMenus}
        </GrayButton>
      </div>
    </section>
  )
}
