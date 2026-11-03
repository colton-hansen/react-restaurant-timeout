export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.65rem] font-semibold uppercase leading-none tracking-[0.12em] text-ink ${className}`}
    >
      Тайм<span className="text-accent">-</span>аут
    </span>
  )
}
