import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { uiCopy, type Locale, type UiCopy } from '@/config/i18n'

export type Theme = 'light' | 'dark'

const THEME_KEY = 'ct-theme'
const LOCALE_KEY = 'ct-locale'

type UiPreferencesContextValue = {
  theme: Theme
  locale: Locale
  copy: UiCopy
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(
  null,
)

function readTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY)
  return stored === 'dark' ? 'dark' : 'light'
}

function readLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_KEY)
  return stored === 'en' ? 'en' : 'ru'
}

export function UiPreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readTheme())
  const [locale, setLocaleState] = useState<Locale>(() => readLocale())

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(THEME_KEY, next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      localStorage.setItem(THEME_KEY, next)
      return next
    })
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === 'ru' ? 'en' : 'ru'
      localStorage.setItem(LOCALE_KEY, next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'ru'
  }, [locale])

  const value = useMemo(
    () => ({
      theme,
      locale,
      copy: uiCopy[locale],
      setTheme,
      toggleTheme,
      setLocale,
      toggleLocale,
    }),
    [theme, locale, setTheme, toggleTheme, setLocale, toggleLocale],
  )

  return (
    <UiPreferencesContext.Provider value={value}>
      {children}
    </UiPreferencesContext.Provider>
  )
}

export function useUiPreferences() {
  const ctx = useContext(UiPreferencesContext)
  if (!ctx) {
    throw new Error('useUiPreferences must be used within UiPreferencesProvider')
  }
  return ctx
}
