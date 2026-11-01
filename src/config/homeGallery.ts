import hero1 from '@/assets/a_1.webp'
import hero2 from '@/assets/a_2.webp'
import hero3 from '@/assets/a_3.webp'

export type HeroGalleryItem = {
  src: string
  alt: string
  caption: string
}

/** Подписи и порядок фото на главной — правьте здесь */
export const heroGallery: HeroGalleryItem[] = [
  { src: hero1, alt: 'Веранда ресторана', caption: 'Веранда' },
  { src: hero2, alt: 'Зал ресторана', caption: 'Веранда' },
  { src: hero3, alt: 'Вид на озеро', caption: 'Веранда' },
]
