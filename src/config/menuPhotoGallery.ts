/** Галерея «Все меню» — PNG импортируются в сборку (надёжно на Vercel) */
import img01 from '@/assets/menu/01-main-menu.png'
import img02 from '@/assets/menu/02-banquet-3200.png'
import img03 from '@/assets/menu/03-banquet-4500.png'
import img04 from '@/assets/menu/04-wine.png'
import img05 from '@/assets/menu/05-bar.png'
import img06 from '@/assets/menu/06-drinks.png'
import img07 from '@/assets/menu/07-kids.png'

export type MenuPhotoPage = {
  id: string
  src: string
  alt: string
  label?: string
}

export const menuPhotoGallery: MenuPhotoPage[] = [
  {
    id: 'main',
    src: img01,
    label: 'Основное меню',
    alt: 'Основное меню ресторана «Тайм-аут»',
  },
  {
    id: 'banquet-3200',
    src: img02,
    label: 'Банкетное меню — 3200 ₽ / чел.',
    alt: 'Банкетное меню 3200 ₽',
  },
  {
    id: 'banquet-4500',
    src: img03,
    label: 'Банкетное меню — 4500 ₽ / чел.',
    alt: 'Банкетное меню 4500 ₽',
  },
  {
    id: 'wine',
    src: img04,
    label: 'Винная карта',
    alt: 'Винная карта «Тайм-аут»',
  },
  {
    id: 'bar',
    src: img05,
    label: 'Барная карта',
    alt: 'Барная карта «Тайм-аут»',
  },
  {
    id: 'drinks',
    src: img06,
    label: 'Напитки',
    alt: 'Карта напитков «Тайм-аут»',
  },
  {
    id: 'kids',
    src: img07,
    label: 'Детское меню',
    alt: 'Детское меню «Тайм-аут»',
  },
]

export const vkMenuStoreUrl = 'https://vk.ru/uslugi-211255917'
