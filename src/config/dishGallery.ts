import borscht from '@/assets/dishes/borscht.jpg'
import pasta from '@/assets/dishes/pasta.jpg'
import pizza from '@/assets/dishes/pizza.jpg'
import salad from '@/assets/dishes/salad.jpg'
import salmon from '@/assets/dishes/salmon.jpg'
import shashlik from '@/assets/dishes/shashlik.jpg'

export type DishPhoto = {
  id: string
  label: string
  src: string
  alt: string
}

/** Иллюстрации категорий из открытых источников, не съёмка кухни «Тайм-аут» */
export const dishPhotos: DishPhoto[] = [
  {
    id: 'salad',
    label: 'Закуски и салаты',
    src: salad,
    alt: 'Иллюстрация категории «Закуски и салаты»',
  },
  {
    id: 'shashlik',
    label: 'Шашлык',
    src: shashlik,
    alt: 'Иллюстрация категории «Шашлык»',
  },
  {
    id: 'soup',
    label: 'Супы',
    src: borscht,
    alt: 'Иллюстрация категории «Супы»',
  },
  {
    id: 'fish',
    label: 'Рыба',
    src: salmon,
    alt: 'Иллюстрация категории «Рыба»',
  },
  {
    id: 'pasta',
    label: 'Паста и воки',
    src: pasta,
    alt: 'Иллюстрация категории «Паста и воки»',
  },
  {
    id: 'pizza',
    label: 'Пицца',
    src: pizza,
    alt: 'Иллюстрация категории «Пицца»',
  },
]

export const dishGalleryNote =
  'Иллюстрации категорий из открытых источников — не фото кухни «Тайм-аут».'

export const dishGalleryCredit = {
  prefix: 'Unsplash. Борщ — liz west, ',
  href: 'https://commons.wikimedia.org/wiki/File:Borscht_served.jpg',
  linkLabel: 'Wikimedia Commons, CC BY 2.0',
} as const
