import { useEffect } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { useMobileSettings } from '@/context/MobileSettingsContext'
import { useUiPreferences } from '@/context/UiPreferencesContext'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'

export function MobileSettingsSheet() {
  const { copy, theme, toggleTheme, locale, setLocale } = useUiPreferences()
  const { open, closeSettings } = useMobileSettings()
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSettings()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, closeSettings])

  if (!open) return null

  return (
    <div className="ct-menu-sheet" role="presentation">
      <button
        type="button"
        className="ct-menu-sheet__backdrop"
        aria-label={copy.settingsSheet.close}
        onClick={closeSettings}
      />
      <div
        className="ct-menu-sheet__panel"
        role="dialog"
        aria-modal="true"
        aria-label={copy.settingsSheet.title}
      >
        <div className="ct-menu-sheet__handle" aria-hidden />
        <header className="ct-menu-sheet__header">
          <GrayButton type="button" arrow="left" onClick={closeSettings}>
            {copy.settingsSheet.back}
          </GrayButton>
        </header>

        <div className="ct-settings-sheet__body">
          <p className="ct-settings-sheet__label">{copy.settingsSheet.theme}</p>
          <GrayButton type="button" onClick={toggleTheme}>
            {theme === 'light' ? copy.themeDark : copy.themeLight}
          </GrayButton>

          <p className="ct-settings-sheet__label">{copy.settingsSheet.language}</p>
          <div className="ct-settings-sheet__locale">
            <GrayButton
              type="button"
              className={locale === 'ru' ? 'is-active' : undefined}
              onClick={() => setLocale('ru')}
            >
              RU
            </GrayButton>
            <GrayButton
              type="button"
              className={locale === 'en' ? 'is-active' : undefined}
              onClick={() => setLocale('en')}
            >
              EN
            </GrayButton>
          </div>
        </div>
      </div>
    </div>
  )
}
