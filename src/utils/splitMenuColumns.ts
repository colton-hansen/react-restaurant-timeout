import type { MenuCategory } from '@/config/menus/types'

function categoryWeight(category: MenuCategory): number {
  return category.items.length
}

/** Разбить категории на две колонки с близким числом позиций */
export function balanceMenuColumns(
  categories: MenuCategory[],
): [MenuCategory[], MenuCategory[]] {
  const left: MenuCategory[] = []
  const right: MenuCategory[] = []
  let leftWeight = 0
  let rightWeight = 0

  const sorted = [...categories].sort(
    (a, b) => categoryWeight(b) - categoryWeight(a),
  )

  for (const category of sorted) {
    const weight = categoryWeight(category)
    if (leftWeight <= rightWeight) {
      left.push(category)
      leftWeight += weight
    } else {
      right.push(category)
      rightWeight += weight
    }
  }

  return [left, right]
}

export function menuColumnsFromTitleGroups(
  categories: MenuCategory[],
  groups: readonly [readonly string[], readonly string[]],
): [MenuCategory[], MenuCategory[]] {
  const byTitle = new Map(categories.map((c) => [c.title, c]))

  const pick = (titles: readonly string[]) =>
    titles.flatMap((title) => {
      const category = byTitle.get(title)
      return category ? [category] : []
    })

  return [pick(groups[0]), pick(groups[1])]
}
