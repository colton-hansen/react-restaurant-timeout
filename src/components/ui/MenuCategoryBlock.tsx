import type { MenuCategory } from '@/config/menus/types'

type MenuCategoryBlockProps = {
  category: MenuCategory
}

export function MenuCategoryBlock({ category }: MenuCategoryBlockProps) {
  return (
    <div className="ct-menu-block">
      <h3 className="ct-menu-block__title">{category.title}</h3>
      <div className="ct-menu-block__wrap">
        <ul className="ct-menu-block__list">
          {category.items.map((item) => (
            <li key={item.name} className="ct-menu-block__item">
              <span className="ct-menu-block__name">{item.name}</span>
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
