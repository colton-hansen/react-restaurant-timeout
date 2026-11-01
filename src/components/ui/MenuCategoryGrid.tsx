import { MenuCategoryBlock } from '@/components/ui/MenuCategoryBlock'
import type { MenuCategory } from '@/config/menus/types'
import {
  balanceMenuColumns,
  menuColumnsFromThreeGroups,
  menuColumnsFromTitleGroups,
} from '@/utils/splitMenuColumns'

type TwoColumnGroups = readonly [readonly string[], readonly string[]]
type ThreeColumnGroups = readonly [
  readonly string[],
  readonly string[],
  readonly string[],
]

type MenuCategoryGridProps = {
  categories: MenuCategory[]
  columnTitleGroups?: TwoColumnGroups | ThreeColumnGroups
  previewColumnTitleGroups?: TwoColumnGroups | ThreeColumnGroups
  showAll?: boolean
  previewTitles?: readonly string[]
  previewMaxItemsPerCategory?: number
}

function MenuColumn({
  categories,
  filterByPreview,
  previewTitles,
  maxItems,
}: {
  categories: MenuCategory[]
  filterByPreview: boolean
  previewTitles?: readonly string[]
  maxItems?: number
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
            <MenuCategoryBlock category={category} maxItems={maxItems} />
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
  previewMaxItemsPerCategory,
}: MenuCategoryGridProps) {
  const isThreeColumnLayout = columnTitleGroups?.length === 3

  const groups =
    !showAll && previewColumnTitleGroups
      ? previewColumnTitleGroups
      : columnTitleGroups

  const filterByPreview =
    !showAll && previewTitles && !previewColumnTitleGroups

  const maxItems =
    !showAll && previewMaxItemsPerCategory != null
      ? previewMaxItemsPerCategory
      : undefined

  const gridClass = [
    'ct-menu-columns',
    isThreeColumnLayout ? 'ct-menu-columns--3' : undefined,
    !showAll ? 'ct-menu-columns--preview' : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  if (groups && groups.length === 3) {
    const [left, middle, right] = menuColumnsFromThreeGroups(
      categories,
      groups as ThreeColumnGroups,
    )

    return (
      <div className={gridClass}>
        <MenuColumn
          categories={left}
          filterByPreview={Boolean(filterByPreview)}
          previewTitles={previewTitles}
          maxItems={maxItems}
        />
        <MenuColumn
          categories={middle}
          filterByPreview={Boolean(filterByPreview)}
          previewTitles={previewTitles}
          maxItems={maxItems}
        />
        <MenuColumn
          categories={right}
          filterByPreview={Boolean(filterByPreview)}
          previewTitles={previewTitles}
          maxItems={maxItems}
        />
      </div>
    )
  }

  const [left, right] = groups
    ? menuColumnsFromTitleGroups(categories, groups as TwoColumnGroups)
    : balanceMenuColumns(categories)

  return (
    <div className={gridClass}>
      <MenuColumn
        categories={left}
        filterByPreview={Boolean(filterByPreview)}
        previewTitles={previewTitles}
        maxItems={maxItems}
      />
      <MenuColumn
        categories={right}
        filterByPreview={Boolean(filterByPreview)}
        previewTitles={previewTitles}
        maxItems={maxItems}
      />
    </div>
  )
}
