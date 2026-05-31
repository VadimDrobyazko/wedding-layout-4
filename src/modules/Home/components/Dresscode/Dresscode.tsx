import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Dresscode.module.css'

const LOOKS = [
  '/images/looks/blue.webp',
  '/images/looks/gold.webp',
  '/images/looks/pink.webp',
  '/images/looks/white.webp',
  '/images/looks/white-v2.webp',
  '/images/looks/green.webp',
]

export default function Dresscode() {
  const { dresscode } = useWeddingConfig()
  const reveal = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Дрес-код</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title} data-title="Палітра вечора">Палітра вечора</h2>
        <p className={styles.sub}>{dresscode.hint}</p>

        <div className={styles.grid}>
          {LOOKS.map((src, i) => (
            <div
              key={src}
              ref={reveal}
              className={styles.cell}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={src} alt="" className={styles.photo} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
