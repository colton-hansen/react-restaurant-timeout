/** Галерея «Все меню» — файлы в `public/menu/` */
export type MenuPhotoPage = {
  id: string
  src: string
  alt: string
  label?: string
}

const local = (file: string) => `/menu/${file}` as const

export const menuPhotoGallery: MenuPhotoPage[] = [
  {
    id: 'main',
    src: local('01-main-menu.png'),
    label: 'Основное меню',
    alt: 'Основное меню ресторана «Тайм-аут»',
  },
  {
    id: 'banquet-3200',
    src: local('02-banquet-3200.png'),
    label: 'Банкетное меню — 3200 ₽ / чел.',
    alt: 'Банкетное меню 3200 ₽',
  },
  {
    id: 'banquet-4500',
    src: local('03-banquet-4500.png'),
    label: 'Банкетное меню — 4500 ₽ / чел.',
    alt: 'Банкетное меню 4500 ₽',
  },
  {
    id: 'wine',
    src: local('04-wine.png'),
    label: 'Винная карта',
    alt: 'Винная карта «Тайм-аут»',
  },
  {
    id: 'bar',
    src: local('05-bar.png'),
    label: 'Барная карта',
    alt: 'Барная карта «Тайм-аут»',
  },
  {
    id: 'drinks',
    src: local('06-drinks.png'),
    label: 'Напитки',
    alt: 'Карта напитков «Тайм-аут»',
  },
  {
    id: 'kids',
    src: local('07-kids.png'),
    label: 'Детское меню',
    alt: 'Детское меню «Тайм-аут»',
  },
]

export const vkMenuStoreUrl = 'https://vk.ru/uslugi-211255917'
