import type { MenuCategory } from '@/config/menus/types'

type MenuCategoryGridProps = {
  categories: MenuCategory[]
  columnTitleGroups: readonly [readonly string[], readonly string[], readonly string[]]
  previewColumnTitleGroups: readonly [
    readonly string[],
    readonly string[],
    readonly string[],
  ]
  previewMaxItemsPerCategory?: number
  showAll: boolean
}

function pickCategories(
  categories: MenuCategory[],
  titles: readonly string[],
): MenuCategory[] {
  return titles
    .map((title) => categories.find((c) => c.title === title))
    .filter((c): c is MenuCategory => Boolean(c))
}

function CategoryBlock({
  category,
  maxItems,
}: {
  category: MenuCategory
  maxItems?: number
}) {
  const items =
    maxItems != null ? category.items.slice(0, maxItems) : category.items

  return (
    <div>
      <h3 className="mb-5 text-2xl">{category.title}</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.name}>
            <div className="flex items-baseline gap-2 font-serif">
              <span className="text-ink">{item.name}</span>
              <span className="min-w-4 flex-1 border-b border-dotted border-border" />
              {item.meta ? (
                <span className="shrink-0 text-ink">{item.meta}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MenuCategoryGrid({
  categories,
  columnTitleGroups,
  previewColumnTitleGroups,
  previewMaxItemsPerCategory,
  showAll,
}: MenuCategoryGridProps) {
  const groups = showAll ? columnTitleGroups : previewColumnTitleGroups
  const maxItems = showAll ? undefined : previewMaxItemsPerCategory

  return (
    <div className="grid gap-12 md:grid-cols-3">
      {groups.map((titles) => (
        <div key={titles.join('|')} className="space-y-10">
          {pickCategories(categories, titles).map((category) => (
            <CategoryBlock
              key={category.title}
              category={category}
              maxItems={maxItems}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
