import { useEffect } from 'react'
import { GrayButton } from '@/components/ui/GrayButton'
import { useMobileSettings } from '@/context/MobileSettingsContext'
import { useUiPreferences } from '@/context/UiPreferencesContext'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'

export function MobileSettingsSheet() {
  const { copy, theme, setTheme, locale, setLocale } = useUiPreferences()
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
          <div className="ct-menu-block">
            <h3 className="ct-menu-block__title">{copy.settingsSheet.theme}</h3>
            <div className="ct-menu-block__wrap">
              <ul className="ct-menu-block__list">
                <li className="ct-menu-block__item">
                  <button
                    type="button"
                    className={`ct-settings-sheet__action${theme === 'light' ? ' is-active' : ''}`}
                    onClick={() => setTheme('light')}
                  >
                    {copy.themeLight}
                  </button>
                </li>
                <li className="ct-menu-block__item">
                  <button
                    type="button"
                    className={`ct-settings-sheet__action${theme === 'dark' ? ' is-active' : ''}`}
                    onClick={() => setTheme('dark')}
                  >
                    {copy.themeDark}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="ct-menu-block">
            <h3 className="ct-menu-block__title">{copy.settingsSheet.language}</h3>
            <div className="ct-menu-block__wrap">
              <ul className="ct-menu-block__list">
                <li className="ct-menu-block__item">
                  <button
                    type="button"
                    className={`ct-settings-sheet__action${locale === 'ru' ? ' is-active' : ''}`}
                    onClick={() => setLocale('ru')}
                  >
                    RU
                  </button>
                </li>
                <li className="ct-menu-block__item">
                  <button
                    type="button"
                    className={`ct-settings-sheet__action${locale === 'en' ? ' is-active' : ''}`}
                    onClick={() => setLocale('en')}
                  >
                    EN
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
