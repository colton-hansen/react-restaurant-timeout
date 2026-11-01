import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type MenuGalleryContextValue = {
  open: boolean
  openGallery: () => void
  closeGallery: () => void
}

const MenuGalleryContext = createContext<MenuGalleryContextValue | null>(null)

export function MenuGalleryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openGallery = useCallback(() => setOpen(true), [])
  const closeGallery = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, openGallery, closeGallery }),
    [open, openGallery, closeGallery],
  )

  return (
    <MenuGalleryContext.Provider value={value}>
      {children}
    </MenuGalleryContext.Provider>
  )
}

export function useMenuGallery() {
  const ctx = useContext(MenuGalleryContext)
  if (!ctx) {
    throw new Error('useMenuGallery must be used within MenuGalleryProvider')
  }
  return ctx
}
