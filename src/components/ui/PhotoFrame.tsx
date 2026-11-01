import type { ReactNode } from 'react'

type PhotoFrameProps = {
  children: ReactNode
  className?: string
}

export function PhotoFrame({ children, className }: PhotoFrameProps) {
  const classes = ['ct-photo-frame', className].filter(Boolean).join(' ')
  return <div className={classes}>{children}</div>
}
