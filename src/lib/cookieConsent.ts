import { useCallback, useEffect, useState } from 'react'

export const COOKIE_STORAGE_KEY = 'timeout-cookie-ok'
export const COOKIE_EVENT = 'timeout-cookie-consent'

export function readCookieConsent() {
  try {
    return localStorage.getItem(COOKIE_STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function acceptCookieConsent() {
  localStorage.setItem(COOKIE_STORAGE_KEY, '1')
  window.dispatchEvent(new Event(COOKIE_EVENT))
}

export function useCookieConsent() {
  const [accepted, setAccepted] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setAccepted(readCookieConsent())
    setReady(true)
    const onAccept = () => setAccepted(true)
    window.addEventListener(COOKIE_EVENT, onAccept)
    return () => window.removeEventListener(COOKIE_EVENT, onAccept)
  }, [])

  const accept = useCallback(() => {
    acceptCookieConsent()
    setAccepted(true)
  }, [])

  return { accepted, accept, ready }
}
