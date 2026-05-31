import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Location.module.css'

export default function Location() {
  const { venue } = useWeddingConfig()
  const reveal = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div ref={reveal} className={styles.card}>
<div className={styles.venueName}>{venue.name}</div>
        <div className={styles.venueAddr}>{venue.address}</div>


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
