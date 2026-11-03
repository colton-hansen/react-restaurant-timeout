import mainMenu from '@/assets/menu/01-main-menu.png'
import banquet3200 from '@/assets/menu/02-banquet-3200.png'
import banquet4500 from '@/assets/menu/03-banquet-4500.png'
import wine from '@/assets/menu/04-wine.png'
import bar from '@/assets/menu/05-bar.png'
import drinks from '@/assets/menu/06-drinks.png'
import kids from '@/assets/menu/07-kids.png'

export type MenuScan = {
  id: string
  label: string
  src: string
  alt: string
}

export const menuScans: MenuScan[] = [
  {
    id: 'main',
    label: 'Основное меню',
    src: mainMenu,
    alt: 'Основное меню ресторана «Тайм-аут»',
  },
  {
    id: 'banquet-3200',
    label: 'Банкет 3200 ₽',
    src: banquet3200,
    alt: 'Банкетное меню — 3200 ₽ / чел.',
  },
  {
    id: 'banquet-4500',
    label: 'Банкет 4500 ₽',
    src: banquet4500,
    alt: 'Банкетное меню — 4500 ₽ / чел.',
  },
  {
    id: 'wine',
    label: 'Винная карта',
    src: wine,
    alt: 'Винная карта «Тайм-аут»',
  },
  {
    id: 'bar',
    label: 'Барная карта',
    src: bar,
    alt: 'Барная карта «Тайм-аут»',
  },
  {
    id: 'drinks',
    label: 'Напитки',
    src: drinks,
    alt: 'Карта напитков «Тайм-аут»',
  },
  {
    id: 'kids',
    label: 'Детское меню',
    src: kids,
    alt: 'Детское меню «Тайм-аут»',
  },
]
