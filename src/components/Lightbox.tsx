import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

type LightboxPage = {
  src: string
  alt: string
  title: string
}

type LightboxProps = {
  pages: LightboxPage[]
  open: boolean
  startIndex?: number
  onClose: () => void
}

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function Lightbox({
  pages,
  open,
  startIndex = 0,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(startIndex)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const liveId = useId()

  useEffect(() => {
    if (open) setIndex(startIndex)
  }, [open, startIndex])

  useEffect(() => {
    if (!open) return

    previousFocus.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'ArrowLeft') {
        setIndex((i) => Math.max(0, i - 1))
        return
      }
      if (e.key === 'ArrowRight') {
        setIndex((i) => Math.min(pages.length - 1, i + 1))
        return
      }
      if (e.key !== 'Tab') return

      const root = panelRef.current
      if (!root) return
      const list = [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1,
      )
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      previousFocus.current?.focus()
    }
  }, [open, onClose, pages.length])

  if (!open) return null

  const page = pages[index]
  const heading = page?.title ?? ''

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[var(--radius-card)] bg-surface p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2
            id={titleId}
            className="text-lg font-semibold normal-case tracking-normal"
          >
            {heading}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted hover:bg-bg hover:text-ink"
            aria-label="Закрыть"
          >
            <X className="size-5" />
          </button>
        </div>
        {page ? (
          <img
            src={page.src}
            alt={page.alt}
            className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg"
          />
        ) : null}
        {pages.length > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
              className="rounded-full border border-ink/15 p-2 disabled:opacity-30"
              aria-label="Предыдущая страница"
            >
              <ChevronLeft className="size-5" />
            </button>
            <span id={liveId} className="text-sm text-muted" aria-live="polite">
              {index + 1} / {pages.length}
            </span>
            <button
              type="button"
              disabled={index === pages.length - 1}
              onClick={() => setIndex((i) => i + 1)}
              className="rounded-full border border-ink/15 p-2 disabled:opacity-30"
              aria-label="Следующая страница"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
