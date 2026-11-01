import { MenuCategoryBlock } from '@/components/ui/MenuCategoryBlock'
import type { MenuCategory } from '@/config/menus/types'
import {
  balanceMenuColumns,
  menuColumnsFromTitleGroups,
} from '@/utils/splitMenuColumns'

type MenuCategoryGridProps = {
  categories: MenuCategory[]
  columnTitleGroups?: readonly [readonly string[], readonly string[]]
  previewColumnTitleGroups?: readonly [readonly string[], readonly string[]]
  showAll?: boolean
  previewTitles?: readonly string[]
}

function MenuColumn({
  categories,
  filterByPreview,
  previewTitles,
}: {
  categories: MenuCategory[]
  filterByPreview: boolean
  previewTitles?: readonly string[]
}) {
  return (
    <div className="ct-menu-columns__col">
      {categories.map((category) => {
        const hidden =
          filterByPreview &&
          previewTitles &&
          !previewTitles.includes(category.title)

        return (
          <div
            key={category.title}
            className={`ct-menu-columns__item${hidden ? ' is-hidden' : ''}`}
          >
            <MenuCategoryBlock category={category} />
          </div>
        )
      })}
    </div>
  )
}

export function MenuCategoryGrid({
  categories,
  columnTitleGroups,
  previewColumnTitleGroups,
  showAll = true,
  previewTitles,
}: MenuCategoryGridProps) {
  const groups =
    !showAll && previewColumnTitleGroups
      ? previewColumnTitleGroups
      : columnTitleGroups

  const [left, right] = groups
    ? menuColumnsFromTitleGroups(categories, groups)
    : balanceMenuColumns(categories)

  const filterByPreview =
    !showAll && previewTitles && !previewColumnTitleGroups

  return (
    <div className="ct-menu-columns">
      <MenuColumn
        categories={left}
        filterByPreview={Boolean(filterByPreview)}
        previewTitles={previewTitles}
      />
      <MenuColumn
        categories={right}
        filterByPreview={Boolean(filterByPreview)}
        previewTitles={previewTitles}
      />
    </div>
  )
}
