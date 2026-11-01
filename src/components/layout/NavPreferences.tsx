import { Languages, Moon, Sun } from 'lucide-react'
import { GrayButton } from '@/components/ui/GrayButton'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function NavPreferences() {
  const { theme, toggleTheme, locale, toggleLocale, copy } = useUiPreferences()

  return (
    <div className="ct-nav-preferences">
      <GrayButton
        type="button"
        iconOnly
        onClick={toggleTheme}
        aria-label={theme === 'light' ? copy.themeDark : copy.themeLight}
      >
        {theme === 'dark' ? (
          <Sun className="ct-gray-btn__icon" aria-hidden />
        ) : (
          <Moon className="ct-gray-btn__icon" aria-hidden />
        )}
      </GrayButton>
      <GrayButton
        type="button"
        iconOnly
        onClick={toggleLocale}
        aria-label={locale === 'ru' ? copy.localeSwitchToEn : copy.localeSwitchToRu}
      >
        <Languages className="ct-gray-btn__icon" aria-hidden />
      </GrayButton>
    </div>
  )
}
