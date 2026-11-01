export type MenuLine = {
  name: string
  meta: string
  metaHref?: string
}

export type MenuCategory = {
  title: string
  items: MenuLine[]
}
