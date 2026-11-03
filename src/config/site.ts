export const site = {
  name: 'Тайм-аут',
  heroTitle: 'Тайм-Аут',
  heroSubtitle: 'Ресторан',
  tagline:
    'Ресторан у живописного озера — для семьи, друзей и спокойного отдыха.',
  address: 'Сестрорецк, Приморское шоссе, 305',
  addressLine: 'Сестрорецк Приморское шоссе 305',
  phoneRestaurant: '+7 (963) 326-18-33',
  phoneRestaurantTel: 'tel:+79633261833',
  phoneRestaurantLabel: 'Ресторан, отель',
  phoneBath: '+7 (905) 215-51-62',
  phoneBathTel: 'tel:+79052155162',
  phoneBathLabel: 'Банный комплекс',
  originalSiteUrl: 'https://timeout-sestroretsk.ru/',
} as const

/** Текст с timeout-sestroretsk.ru */
export const aboutText = `Добро пожаловать в ресторан Тайм-аут — идеальное место, чтобы насладиться красотой живописного озера в кругу семьи и друзей. Наш ресторан предлагает: уютную атмосферу, два банкетных зала, живую музыку и детские мастер-классы. Мы стремимся обеспечить качественное обслуживание и вкусную еду для всех гостей. Кроме того, у нас есть банный комплекс. Проведите время с нами в ресторане Тайм-аут и подарите себе воспоминания, которые останутся на всю жизнь.`

/** Факты из текста «О нас» на timeout-sestroretsk.ru */
export const aboutFacts = [
  'Два банкетных зала',
  'Живая музыка',
  'Детские мастер-классы',
] as const

export const bathText = {
  title: 'Банный комплекс',
  lead: 'Окунитесь в атмосферу релакса в нашем банном комплексе',
  body: `В нашем банном комплексе есть все необходимое для роскошного отдыха — от традиционной русской бани до массажных кресел, купели, бассейна, турецкой бани и большой обеденной зоны. Мы также предоставляем кейтеринг для вечеринок, так что вы можете устроить настоящий праздник. Побалуйте себя отдыхом и расслаблением в банном комплексе «Тайм-аут».`,
  amenities: [
    'Русская баня',
    'Хаммам',
    'Бассейн',
    'Купель',
    'Массажные кресла',
    'Обеденная зона',
    'Кейтеринг',
  ] as const,
} as const

export const hotelText = {
  title: 'Отель',
  lead: 'Номера у Сестрорецкого разлива',
  body: 'Бронирование номера — по телефону ресторана и отеля. На Яндекс Картах указаны тарифы: «Стандарт» от 5500 ₽ / сут. и номер повышенной комфортности от 6500 ₽ / сут.',
  rates: [
    { name: 'Номер «Стандарт»', price: 'от 5500 ₽ / сут.' },
    { name: 'Номер повышенной комфортности', price: 'от 6500 ₽ / сут.' },
  ],
  photoCaption: 'Вид с территории у Сестрорецкого разлива. Фото номеров на этой копии нет.',
} as const

export const mainNav = [
  { id: 'menu', label: 'Меню' },
  { id: 'hotel', label: 'Отель' },
  { id: 'bath', label: 'Баня' },
  { id: 'map', label: 'Карта' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
] as const

export const socialLinks = [
  {
    id: 'vk',
    label: 'ВКонтакте',
    href: 'https://vk.com/time_out_sp',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/79633261833',
  },
] as const

export const yandexOrgId = '1136181638'

export const yandexMapEmbed = `https://yandex.ru/map-widget/v1/?z=17&ol=biz&oid=${yandexOrgId}&lang=ru_RU`

export const yandexMapsOrgUrl = `https://yandex.ru/maps/org/taymaut/${yandexOrgId}/`

export const yandexReviewsEmbed = `https://yandex.ru/maps-reviews-widget/${yandexOrgId}?comments`

export const yandexReviewsUrl = `https://yandex.ru/maps/org/taymaut/${yandexOrgId}/reviews/`

export const hours = [
  { days: 'Вс – Чт', time: '9:00 – 22:00' },
  { days: 'Пт – Сб', time: '9:00 – 23:00' },
] as const

export const footerNotice =
  'Учебный ребилд сайта ресторана «Тайм-аут». Не является официальным ресурсом заведения.'

export const cookieText =
  'Сохраняем только отметку согласия. Счётчиков и аналитики на этой копии нет. Виджеты Яндекс Карт и отзывов подключаются после согласия — это сторонний сервис.'
