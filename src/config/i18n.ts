export type Locale = 'ru' | 'en'

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
    contactsSectionTitle: 'Контакты и режим работы',
    contactBlocks: {
      phones: 'Телефоны',
      hours: 'Режим работы',
      social: 'Соц. сети',
    },
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
    contactsSectionTitle: 'Contacts & hours',
    contactBlocks: {
      phones: 'Phones',
      hours: 'Opening hours',
      social: 'Social',
    },
    themeDark: 'Dark theme',
    themeLight: 'Light theme',
    localeSwitchToEn: 'Switch to English',
    localeSwitchToRu: 'Switch to Russian',
  },
} as const

export type UiCopy = (typeof uiCopy)[Locale]
