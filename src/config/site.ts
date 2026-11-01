export const site = {
  name: 'Тайм-аут',
  tagline:
    'Ресторан у живописного озера — для семьи, друзей и спокойного отдыха.',
  address: 'Сестрорецк, Приморское шоссе, 305',
  phoneRestaurant: '+7 (963) 326-18-33',
  phoneRestaurantLabel: 'Ресторан, отель',
  phoneBath: '+7 (905) 215-51-62',
  phoneBathLabel: 'Банный комплекс',
} as const

export const aboutText = `Добро пожаловать в ресторан Тайм-аут — идеальное место, чтобы насладиться красотой живописного озера в кругу семьи и друзей. Наш ресторан предлагает: уютную атмосферу, два банкетных зала, живую музыку и детские мастер-классы. Мы стремимся обеспечить качественное обслуживание и вкусную еду для всех гостей. Кроме того, у нас есть банный комплекс. Проведите время с нами в ресторане Тайм-аут и подарите себе воспоминания, которые останутся на всю жизнь.`

export const bathText = {
  title: 'Банный комплекс',
  lead: 'Окунитесь в атмосферу релакса в нашем банном комплексе',
  body: `В нашем банном комплексе есть все необходимое для роскошного отдыха — от традиционной русской бани до массажных кресел, купели, бассейна, турецкой бани и большой обеденной зоны. Мы также предоставляем кейтеринг для вечеринок, так что вы можете устроить настоящий праздник. Побалуйте себя отдыхом и расслаблением в банном комплексе «Тайм-аут».`,
} as const

export type NavItem = {
  id: string
  label: string
}

/** Порядок и подписи как в PC-макете Figma (navigation) */
export const mainNav: NavItem[] = [
  { id: 'about', label: 'О нас' },
  { id: 'menu', label: 'Основное меню' },
  { id: 'banquet-menu', label: 'Банкетное меню' },
  { id: 'bath', label: 'Банный комплекс' },
  { id: 'location', label: 'Локация и отзывы' },
  { id: 'contacts', label: 'Контакты' },
]

/** Ресторан Time Out — https://yandex.ru/maps/-/CXfl6Aiw */
export const yandexMapsShareUrl = 'https://yandex.ru/maps/-/CXfl6Aiw'

export const yandexOrgId = '1136181638'

export const yandexOrgPage =
  'https://yandex.ru/maps/org/taymaut/1136181638/'

export const yandexReviewsOrgPage =
  'https://yandex.ru/maps/org/taymaut/1136181638/reviews/'

export const yandexEmbeds = {
  mapSrc: `https://yandex.ru/map-widget/v1/?z=17&ol=biz&oid=${yandexOrgId}&lang=ru_RU`,
  reviewsSrc: `https://yandex.ru/maps-reviews-widget/${yandexOrgId}?comments&lang=ru_RU`,
} as const

export const footerNotice =
  'Учебный макет сайта ресторана «Тайм-аут». Не является официальным ресурсом заведения.'

export const hours = [
  { days: 'Вс – Чт', time: '9:00 – 22:00' },
  { days: 'Пт – Сб', time: '9:00 – 23:00' },
] as const

export const adress = [
  { a: 'Сестрорецк', b: 'город' },
  { a: 'Приморское шоссе 305', b: 'улица' }, 
] as const

export const embedPlaceholders = [
  {
    id: 'photos',
    title: 'Фото',
    hint: 'Здесь будет галерея или слайдер с фотографиями ресторана и банного комплекса.',
  },
  {
    id: 'map',
    title: 'Яндекс.Карты',
    hint: 'Здесь будет встроенный виджет Яндекс.Карт с адресом и маршрутом.',
  },
  {
    id: 'reviews',
    title: 'Отзывы',
    hint: 'Здесь будут отзывы гостей (Яндекс, 2ГИС или другой источник).',
  },
] as const
