import { Menu, Phone, X } from 'lucide-react'
import { useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BrandMark } from '@/components/BrandMark'
import { PillButton } from '@/components/PillButton'
import { VkIcon, WhatsAppIcon } from '@/components/SocialIcons'
import { mainNav, site, socialLinks } from '@/config/site'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinkClass =
  'font-display text-[15px] uppercase tracking-[0.14em] text-muted transition hover:text-accent aria-[current=location]:text-accent'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navId = useId()
  const onHome = location.pathname === '/'
  const active = useActiveSection(mainNav, onHome)

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 bg-surface">
      <div className="hidden border-b border-border font-serif text-sm italic text-muted md:block">
        <div className="mx-auto flex max-w-[var(--width-content)] items-center justify-between gap-6 px-8 py-2">
          <p>{site.tagline}</p>
          <a href={site.phoneRestaurantTel} className="not-italic hover:text-accent">
            {site.phoneRestaurant}
          </a>
          <p>{site.address}</p>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-[var(--width-content)] items-center justify-between gap-3 px-4 md:px-8">
        <Link
          to="/"
          onClick={() => {
            close()
            if (onHome) window.scrollTo({ top: 0 })
          }}
        >
          <BrandMark />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Основная навигация"
        >
          {mainNav.map((item) => (
            <Link
              key={item.id}
              to={{ pathname: '/', hash: `#${item.id}` }}
              className={navLinkClass}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="inline-flex size-9 items-center justify-center text-muted hover:text-accent"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.id === 'vk' ? (
                <VkIcon className="size-4" />
              ) : (
                <WhatsAppIcon className="size-4" />
              )}
            </a>
          ))}
          <PillButton href={site.phoneRestaurantTel} size="sm">
            Забронировать
          </PillButton>
        </div>

        <div className="flex items-center gap-0.5 lg:hidden">
          <a
            href={site.phoneRestaurantTel}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink"
            aria-label="Позвонить в ресторан и отель"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full"
            aria-expanded={open}
            aria-controls={navId}
            aria-label={open ? 'Закрыть разделы сайта' : 'Открыть разделы сайта'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={navId}
          className="border-t border-border px-4 py-2 lg:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col">
            <li>
              <Link
                to={{ pathname: '/', hash: '#about' }}
                className="block py-3 font-display uppercase tracking-[0.12em]"
                onClick={close}
              >
                О нас
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  className="block py-3 font-display uppercase tracking-[0.12em] aria-[current=location]:text-accent"
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 py-3 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  {link.id === 'vk' ? (
                    <VkIcon className="size-4" />
                  ) : (
                    <WhatsAppIcon className="size-4" />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <PillButton
                href={site.phoneRestaurantTel}
                size="sm"
                className="w-full"
              >
                Забронировать
              </PillButton>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
