type EmbedPlaceholderProps = {
  title: string
  hint: string
  className?: string
}

export function EmbedPlaceholder({
  title,
  hint,
  className,
}: EmbedPlaceholderProps) {
  const classes = ['ct-placeholder', className].filter(Boolean).join(' ')
  return (
    <article className={classes} aria-label={`Заглушка: ${title}`}>
      <p className="ct-placeholder__title">{title}</p>
      <p className="ct-placeholder__hint">{hint}</p>
    </article>
  )
}
