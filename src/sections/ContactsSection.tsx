import { useMemo } from 'react'
import { MenuCategoryGrid } from '@/components/ui/MenuCategoryGrid'
import type { MenuCategory } from '@/config/menus/types'
import { site, socialLinks } from '@/config/site'
import { useUiPreferences } from '@/context/UiPreferencesContext'

export function ContactsSection() {
  const { copy } = useUiPreferences()

  const contactCategories = useMemo((): MenuCategory[] => {
    const phones = copy.contactBlocks.phones
    const schedule = copy.contactBlocks.hours
    const social = copy.contactBlocks.social

    const socialLabelById: Record<string, string> = {
      vk: copy.socialLabels.vk,
      whatsapp: copy.socialLabels.whatsapp,
    }

    return [
      {
        title: phones,
        items: [
          {
            name: copy.phoneLabels.restaurant,
            meta: site.phoneRestaurant,
            metaHref: `tel:${site.phoneRestaurant.replace(/\D/g, '')}`,
          },
          {
            name: copy.phoneLabels.bath,
            meta: site.phoneBath,
            metaHref: `tel:${site.phoneBath.replace(/\D/g, '')}`,
          },
        ],
      },
      {
        title: schedule,
        items: copy.hours.map(({ days, time }) => ({ name: days, meta: time })),
      },
      {
        title: social,
        items: socialLinks
          .filter((link) => link.id !== 'phone')
          .map((link) => ({
            name: socialLabelById[link.id] ?? link.displayLabel,
            nameHref: link.href,
            external: true,
          })),
      },
    ]
  }, [copy])

  const columnTitleGroups = useMemo(
    () =>
      [
        [copy.contactBlocks.phones],
        [copy.contactBlocks.hours],
        [copy.contactBlocks.social],
      ] as const,
    [copy],
  )

  return (
    <section id="contacts" className="ct-anchor ct-section ct-section--wide">
      <h2 className="ct-section__title ct-section__title--caps">
        {copy.contactsSectionTitle}
      </h2>

      <MenuCategoryGrid
        categories={contactCategories}
        columnTitleGroups={columnTitleGroups}
      />
    </section>
  )
}
