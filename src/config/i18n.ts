import { aboutText, bathText, footerNotice, hotelText } from '@/config/site'

export type Locale = 'ru' | 'en'

const hoursRu = [
  { days: 'Вс – Чт', time: '9:00 – 22:00' },
  { days: 'Пт – Сб', time: '9:00 – 23:00' },
] as const

const hoursEn = [
  { days: 'Sun – Thu', time: '9:00 AM – 10:00 PM' },
  { days: 'Fri – Sat', time: '9:00 AM – 11:00 PM' },
] as const

export const uiCopy = {
  ru: {
    nav: {
      about: 'О нас',
      menu: 'Основное меню',
      'banquet-menu': 'Банкетное меню',
      hotel: 'Отель',
      bath: 'Банный комплекс',
      location: 'Локация и отзывы',
      contacts: 'Контакты',
    },
    mobileNav: {
      about: 'О нас',
      menu: 'Меню',
      location: 'Локация',
      contacts: 'Контакты',
      settings: 'Настройки',
    },
    footerNotice,
    sectionTitles: {
      about: 'О нас',
      menu: 'Основное меню',
      banquetMenu: 'Банкетное меню',
      hotel: hotelText.title,
      bath: bathText.title,
      location: 'Локация и отзывы',
    },
    aboutBody: aboutText,
    hotelBody: hotelText.body,
    hotelRatesTitle: hotelText.lead,
    hotelRates: hotelText.rates,
    bathLead: bathText.lead,
    bathBody: bathText.body,
    contactsSectionTitle: 'Контакты и режим работы',
    contactBlocks: {
      phones: 'Телефоны',
      hours: 'Режим работы',
      social: 'Соц. сети',
    },
    phoneLabels: {
      restaurant: 'Ресторан, отель',
      bath: 'Банный комплекс',
    },
    socialLabels: {
      vk: 'ВКонтакте',
      whatsapp: 'WhatsApp',
    },
    hours: hoursRu,
    buttons: {
      bookRoom: 'Забронировать номер',
      mainMenu: 'Основное меню',
      banquetMenu: 'Банкетное меню',
      showMore: 'Показать ещё',
      allMenus: 'Все меню',
      bookBath: 'Забронировать баню',
      galleryBack: 'Назад',
      galleryForward: 'Вперёд',
    },
    gallery: {
      pinSlide: 'Закрепить слайд',
      slidePinned: 'Слайд закреплён',
    },
    menuSheet: {
      close: 'Закрыть галерею меню',
      title: 'Все меню',
      back: 'Назад',
      vkStore: 'Витрина услуг VK',
    },
    settingsSheet: {
      close: 'Закрыть настройки',
      title: 'Настройки',
      back: 'Назад',
      theme: 'Тема',
      language: 'Язык',
    },
    banquetPrice: '3200 ₽ / чел.',
    themeDark: 'Тёмная тема',
    themeLight: 'Светлая тема',
    localeSwitchToEn: 'Переключить на английский',
    localeSwitchToRu: 'Переключить на русский',
  },
  en: {
    nav: {
      about: 'About',
      menu: 'Main menu',
      'banquet-menu': 'Banquet menu',
      hotel: 'Hotel',
      bath: 'Bath house',
      location: 'Location & reviews',
      contacts: 'Contacts',
    },
    mobileNav: {
      about: 'About',
      menu: 'Menu',
      location: 'Location',
      contacts: 'Contacts',
      settings: 'Settings',
    },
    footerNotice:
      'Educational mock-up of the Time-out restaurant website. Not an official venue resource.',
    sectionTitles: {
      about: 'About us',
      menu: 'Main menu',
      banquetMenu: 'Banquet menu',
      hotel: 'Hotel',
      bath: 'Bath house',
      location: 'Location & reviews',
    },
    aboutBody: `Welcome to Time-out — a place to enjoy a scenic lake with family and friends. We offer a cozy atmosphere, two banquet halls, live music, and kids' workshops. Quality service and great food for every guest. Our bath house is on site too. Visit Time-out and take home memories that last.`,
    hotelBody: `Time-out Hotel is an easy base for a coastal weekend: a calm stay, breakfast, eco-trail walks, and dinner at our restaurant without a long trip. Book by phone — we'll confirm dates and room type.`,
    hotelRatesTitle:
      'Rooms on Lake Sestroretsk — minutes from the restaurant and bath house',
    hotelRates: [
      { name: 'Standard room', price: 'from 5500 ₽ / night' },
      { name: 'Superior room', price: 'from 6500 ₽ / night' },
    ],
    bathLead: 'Relax in our bath house',
    bathBody: `Our bath house has everything for a luxurious break — Russian sauna, massage chairs, plunge pools, swimming pool, Turkish hammam, and a large dining area. Catering for parties is available. Treat yourself at Time-out.`,
    contactsSectionTitle: 'Contacts & hours',
    contactBlocks: {
      phones: 'Phones',
      hours: 'Opening hours',
      social: 'Social',
    },
    phoneLabels: {
      restaurant: 'Restaurant & hotel',
      bath: 'Bath house',
    },
    socialLabels: {
      vk: 'VK',
      whatsapp: 'WhatsApp',
    },
    hours: hoursEn,
    buttons: {
      bookRoom: 'Book a room',
      mainMenu: 'Main menu',
      banquetMenu: 'Banquet menu',
      showMore: 'Show more',
      allMenus: 'Full menu',
      bookBath: 'Book the bath',
      galleryBack: 'Back',
      galleryForward: 'Next',
    },
    gallery: {
      pinSlide: 'Pin slide',
      slidePinned: 'Slide pinned',
    },
    menuSheet: {
      close: 'Close menu gallery',
      title: 'Full menu',
      back: 'Back',
      vkStore: 'VK service showcase',
    },
    settingsSheet: {
      close: 'Close settings',
      title: 'Settings',
      back: 'Back',
      theme: 'Theme',
      language: 'Language',
    },
    banquetPrice: '3200 ₽ / person',
    themeDark: 'Dark theme',
    themeLight: 'Light theme',
    localeSwitchToEn: 'Switch to English',
    localeSwitchToRu: 'Switch to Russian',
  },
} as const

export type UiCopy = (typeof uiCopy)[Locale]
