import styles from './FinalPhoto.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import { photoUrl } from '@utils/photo'

export default function FinalPhoto() {
  const { couple, event, finalPhoto } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section
      className={`${styles.section} ${!finalPhoto.img ? styles.fallback : ''}`}
    >
      {finalPhoto.img && (
        <img
          className={styles.bg}
          src={photoUrl(finalPhoto.img)}
          alt={finalPhoto.imgAlt}
        />
      )}
      <div className={styles.overlay} aria-hidden='true' />

      <div className={styles.content} ref={ref}>
        <p className={styles.callout}>Святкуйте з нами</p>
        <h2 className={styles.names}>
          {couple.bride}
          <span className={styles.ampersand}>&amp;</span>
          {couple.groom}
        </h2>
        <div className={styles.divider} aria-hidden='true' />
        <p className={styles.date}>{event.dateShort}</p>
      </div>
    </section>
  )
}
