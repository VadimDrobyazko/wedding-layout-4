import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Story.module.css'

const PHOTOS = [
  '/images/para/1.webp',
  '/images/para/2.webp',
  '/images/para/4.webp',
]

export default function Story() {
  const { story } = useWeddingConfig()
  const chapters = story.slice(0, 3)
  const revealContent = useReveal(styles.visible)
  const revealFinale = useReveal(styles.finaleVisible)

  return (
    <div className={styles.wrap}>
      {chapters.map((item, i) => (
        <div
          key={item.year}
          className={styles.chapter}
          style={{ backgroundImage: `url(${PHOTOS[i]})` }}
        >
          <div className={styles.overlay} />
          <div ref={revealContent} className={styles.content}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.line} />
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}

      <div ref={revealFinale} className={styles.finale}>
        <svg className={styles.infinitySvg} viewBox="0 0 220 100" fill="none" aria-hidden="true">
          <path
            className={styles.infinityPath}
            d="M10 50 C10 20 50 20 110 50 C170 80 210 80 210 50 C210 20 170 20 110 50 C50 80 10 80 10 50 Z"
            stroke="#9b7e74"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={styles.finaleText}>
          Вся решта — попереду.<br />І вся вона — разом.
        </p>
      </div>
    </div>
  )
}
