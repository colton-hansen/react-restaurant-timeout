import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type MobileSettingsContextValue = {
  open: boolean
  openSettings: () => void
  closeSettings: () => void
}

const MobileSettingsContext = createContext<MobileSettingsContextValue | null>(
  null,
)

export function MobileSettingsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openSettings = useCallback(() => setOpen(true), [])
  const closeSettings = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openSettings, closeSettings }),
    [open, openSettings, closeSettings],
  )

  return (
    <MobileSettingsContext.Provider value={value}>
      {children}
    </MobileSettingsContext.Provider>
  )
}

export function useMobileSettings() {
  const ctx = useContext(MobileSettingsContext)
  if (!ctx) {
    throw new Error('useMobileSettings must be used within MobileSettingsProvider')
  }
  return ctx
}
