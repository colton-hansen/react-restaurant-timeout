import type { MenuCategory } from '@/config/menus/types'

type MenuCategoryBlockProps = {
  category: MenuCategory
  maxItems?: number
}

export function MenuCategoryBlock({ category, maxItems }: MenuCategoryBlockProps) {
  const items =
    maxItems != null ? category.items.slice(0, maxItems) : category.items

  return (
    <div className="ct-menu-block">
      <h3 className="ct-menu-block__title">{category.title}</h3>
      <div className="ct-menu-block__wrap">
        <ul className="ct-menu-block__list">
          {items.map((item) => (
            <li key={item.name} className="ct-menu-block__item">
              {item.nameHref ? (
                <a
                  className="ct-menu-block__name ct-menu-block__link"
                  href={item.nameHref}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.name}
                </a>
              ) : (
                <span className="ct-menu-block__name">{item.name}</span>
              )}
              {item.meta ? (
                item.metaHref ? (
                  <a className="ct-menu-block__meta ct-menu-block__link" href={item.metaHref}>
                    {item.meta}
                  </a>
                ) : (
                  <span className="ct-menu-block__meta">{item.meta}</span>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
