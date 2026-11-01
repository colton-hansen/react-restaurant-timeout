import { Languages, Moon, Sun } from 'lucide-react'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function NavPreferences() {
  const { theme, toggleTheme, locale, toggleLocale, copy } = useUiPreferences()

  return (
    <div className="ct-nav-preferences">
      <button
        type="button"
        className="ct-nav-preferences__btn"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? copy.themeDark : copy.themeLight}
      >
        {theme === 'dark' ? (
          <Sun className="ct-nav-preferences__icon" aria-hidden />
        ) : (
          <Moon className="ct-nav-preferences__icon" aria-hidden />
        )}
      </button>
      <button
        type="button"
        className="ct-nav-preferences__btn"
        onClick={toggleLocale}
        aria-label={locale === 'ru' ? copy.localeSwitchToEn : copy.localeSwitchToRu}
      >
        <Languages className="ct-nav-preferences__icon" aria-hidden />
      </button>
    </div>
  )
}
