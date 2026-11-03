import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Страница не найдена — Тайм-аут')

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 md:px-8 md:py-24">
      <h1 className="text-4xl md:text-5xl">Страница не найдена</h1>
      <p className="mt-4 font-serif leading-relaxed text-muted">
        Такой страницы на этой копии сайта нет. Бронирование — по телефону на
        главной.
      </p>
      <p className="mt-8">
        <Link to="/" className="font-serif text-accent hover:text-ink">
          ← На главную
        </Link>
      </p>
    </article>
  )
}
