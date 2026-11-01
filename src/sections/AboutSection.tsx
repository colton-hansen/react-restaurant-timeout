import { GrayButton } from '@/components/ui/GrayButton'
import { aboutText } from '@/config/site'

export function AboutSection() {
  return (
    <section id="about" className="ct-anchor ct-section">
      <div className="ct-about">
        <div className="ct-about__main">
          <h2 className="ct-section__title ct-section__title--caps">О нас</h2>
          <p className="ct-prose">{aboutText}</p>
          <div className="ct-about__actions">
            <GrayButton href="#contacts">Забронировать номер</GrayButton>
            <GrayButton href="#menu" arrow="right">
              Основное меню
            </GrayButton>
            <GrayButton href="#banquet-menu" arrow="right">
              Банкетное меню
            </GrayButton>
          </div>
        </div>
        <div className="ct-about__spacer" aria-hidden />
      </div>
    </section>
  )
}
