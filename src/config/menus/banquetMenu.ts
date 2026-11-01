import type { MenuCategory } from '@/config/menus/types'

export const banquetMenuPriceLabel = '3200 ₽ / чел.'

/** Две колонки банкетного меню (как в section-banquet-menu) */
export const banquetMenuColumnTitles = [
  ['Холодные закуски и салаты', 'Выпечка'],
  ['Горячее', 'Напитки'],
] as const

/** До «Показать ещё»: только горячее и напитки */
export const banquetMenuPreviewTitles = ['Горячее', 'Напитки'] as const

export const banquetMenuPreviewColumnTitles = [
  ['Горячее'],
  ['Напитки'],
] as const

/** Банкетное меню — данные с макета (фото banquet_menu) */
export const banquetMenuCategories: MenuCategory[] = [
  {
    title: 'Холодные закуски и салаты',
    items: [
      { name: 'Рулетики из баклажанов со сливочным сыром', meta: '60 г' },
      { name: 'Брускетта Вителло Тоннато', meta: '60 г' },
      { name: 'Сырное ассорти', meta: '85 г' },
      { name: 'Моцарелла с томатами', meta: '100 г' },
      { name: 'Оливье с копчёной куриной грудкой', meta: '100 г' },
      { name: 'Салат с хрустящими баклажанами', meta: '100 г' },
      { name: 'Салат Цезарь с куриным филе', meta: '100 г' },
    ],
  },
  {
    title: 'Горячее',
    items: [
      { name: 'Шашлык из куриной грудки с домашней аджикой', meta: '75 г' },
      { name: 'Шашлык из свиной шеи с домашней аджикой', meta: '75 г' },
      { name: 'Запечённый картофель с чесноком и розмарином', meta: '50 г' },
      { name: 'Овощи на мангале', meta: '60 г' },
    ],
  },
  {
    title: 'Выпечка',
    items: [{ name: 'Домашняя хлебная корзина', meta: '80 г' }],
  },
  {
    title: 'Напитки',
    items: [
      { name: 'Морс из ягод', meta: '0,2 л' },
      { name: 'Вода', meta: '0,5 л' },
      { name: 'Чай, кофе', meta: '' },
    ],
  },
]
