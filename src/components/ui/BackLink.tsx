import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

type BackLinkProps = {
  to?: string
  label?: string
}

export function BackLink({ to = '/', label = 'Назад' }: BackLinkProps) {
  return (
    <Link to={to} className="ct-back">
      <ChevronLeft size={16} strokeWidth={1.75} aria-hidden />
      {label}
    </Link>
  )
}
