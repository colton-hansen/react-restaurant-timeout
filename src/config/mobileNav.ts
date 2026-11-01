/** Нижняя навигация mobile (4 пункта на макете) */
export const mobileNav = [
  { id: 'about', label: 'О нас' },
  { id: 'menu', label: 'Меню' },
  { id: 'location', label: 'Локация' },
  { id: 'contacts', label: 'Контакты' },
] as const

export type MobileNavId = (typeof mobileNav)[number]['id']

const mobileNavIds = new Set(mobileNav.map((item) => item.id))

/** Подсветка вкладки при hash банкета / бани и т.д. */
export function resolveMobileNavActive(hash: string): MobileNavId {
  if (hash === 'banquet-menu' || hash === 'bath') return 'menu'
  if (mobileNavIds.has(hash as MobileNavId)) return hash as MobileNavId
  return 'about'
}
