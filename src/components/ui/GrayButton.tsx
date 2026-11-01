import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

type GrayButtonProps = {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  arrow?: 'none' | 'right' | 'left'
  className?: string
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

export function GrayButton({
  children,
  href,
  type = 'button',
  arrow = 'none',
  className,
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: GrayButtonProps) {
  const classes = ['ct-gray-btn', className].filter(Boolean).join(' ')

  const content = (
    <>
      {arrow === 'left' ? (
        <ChevronLeft className="ct-gray-btn__icon" aria-hidden />
      ) : null}
      <span className="ct-gray-btn__label">{children}</span>
      {arrow === 'right' ? (
        <ChevronRight className="ct-gray-btn__icon" aria-hidden />
      ) : null}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
