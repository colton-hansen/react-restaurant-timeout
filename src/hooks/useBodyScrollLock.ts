import { useEffect } from 'react'

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const { body } = document
    const prev = body.style.overflow
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = prev
    }
  }, [locked])
}
