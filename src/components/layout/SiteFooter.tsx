import { useUiPreferences } from '@/context/UiPreferencesContext'

export function SiteFooter() {
  const { copy } = useUiPreferences()

  return <footer className="ct-site-footer">{copy.footerNotice}</footer>
}
