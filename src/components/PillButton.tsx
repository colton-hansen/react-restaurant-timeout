import type { ReactNode } from 'react'

type PillButtonProps = {
  href: string
  children: ReactNode
  className?: string
  size?: 'sm' | 'md'
}

export function PillButton({
  href,
  children,
  className = '',
  size = 'md',
}: PillButtonProps) {
  const compact = size === 'sm'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-accent font-display uppercase tracking-[0.16em] text-white transition hover:bg-ink ${compact ? 'px-5 py-2 text-sm' : 'px-10 py-3 text-base'} ${className}`}
    >
      {children}
    </a>
  )
}
