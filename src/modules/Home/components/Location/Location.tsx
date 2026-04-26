import { useWeddingConfig } from '@context/WeddingConfigContext'
import { CornerFlourish } from '../Decorations/Decorations'
import styles from './Location.module.css'

export default function Location() {
  const { venue } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Де</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title}>Місце урочистості</h2>
        <p className={styles.sub}>Садиба «{venue.name}»</p>
      </div>

      <div className={styles.card}>
        <CornerFlourish className={`${styles.corner} ${styles.cornerTl}`} size={110} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerTr}`} size={110} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerBl}`} size={110} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerBr}`} size={110} />

        <div className={styles.venueName}>{venue.name}</div>
        <div className={styles.venueAddr}>{venue.address}</div>

        <div className={styles.meta}>
          <div>
            <div className={styles.metaLbl}>Початок</div>
            <div className={styles.metaVal}>{venue.startTime}</div>
          </div>
          <div className={styles.metaSep} />
          <div>
            <div className={styles.metaLbl}>Дрес-код</div>
            <div className={styles.metaVal}>{venue.dresscode}</div>
          </div>
          <div className={styles.metaSep} />
          <div>
            <div className={styles.metaLbl}>Парковка</div>
            <div className={styles.metaVal}>На території</div>
          </div>
        </div>

        <a className={styles.cta} href={venue.mapUrl}>
          <span>Відкрити мапу</span>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
            <line x1="0" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="0.9" />
            <path d="M11 1 L 16 5 L 11 9" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
