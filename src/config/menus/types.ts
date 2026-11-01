export type MenuLine = {
  name: string
  meta?: string
  metaHref?: string
  nameHref?: string
  external?: boolean
}

export type MenuCategory = {
  title: string
  items: MenuLine[]
}
