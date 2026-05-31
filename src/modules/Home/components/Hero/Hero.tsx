import { useWeddingConfig } from '@context/WeddingConfigContext'
import { photoUrl } from '@utils/photo'
import styles from './Hero.module.css'

export default function Hero() {
  const { couple, event, hero } = useWeddingConfig()

  return (
    <section className={styles.hero}>
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${photoUrl(hero.photo)})` }}
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroVignette} />
      <div className={styles.heroFrame} aria-hidden="true" />
      <div className={styles.heroSide} aria-hidden="true">Wedding · {event.year}</div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className={styles.heLine} aria-hidden="true" />
          запрошення
          <span className={styles.heLine} aria-hidden="true" />
        </div>
        <div className={styles.heroNames}>
          <span>{couple.brideEn}</span>
          <span className={styles.heroAmp}>&amp;</span>
          <span>{couple.groomEn}</span>
        </div>
        <div className={styles.heroMeta}>{event.dateDisplay}</div>
      </div>
    </section>
  )
}
