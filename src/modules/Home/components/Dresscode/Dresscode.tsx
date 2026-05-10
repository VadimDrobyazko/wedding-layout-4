import { useWeddingConfig } from '@context/WeddingConfigContext'
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
          {LOOKS.map((src) => (
            <div key={src} className={styles.cell}>
              <img src={src} alt="" className={styles.photo} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
