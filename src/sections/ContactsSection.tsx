import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import type { MenuCategory } from '@/config/menus/types'
import { hours, site } from '@/config/site'

const contactColumnTitles = [['Контакты'], ['Режим работы']] as const

const contactCategories: MenuCategory[] = [
  {
    title: 'Контакты',
    items: [
      {
        name: site.phoneRestaurantLabel,
        meta: site.phoneRestaurant,
        metaHref: `tel:${site.phoneRestaurant.replace(/\D/g, '')}`,
      },
      {
        name: site.phoneBathLabel,
        meta: site.phoneBath,
        metaHref: `tel:${site.phoneBath.replace(/\D/g, '')}`,
      },
    ],
  },
  {
    title: 'Режим работы',
    items: hours.map(({ days, time }) => ({ name: days, meta: time })),
  },
]

export function ContactsSection() {
  return (
    <section id="contacts" className="ct-anchor ct-section ct-section--narrow">
      <h2 className="ct-section__title ct-section__title--caps">
        Контакты и режим работы
      </h2>

      <MenuCategoryGrid
        categories={contactCategories}
        columnTitleGroups={contactColumnTitles}
      />
    </section>
  )
}
