import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './Story.module.css'

export default function Story() {
  const { story } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Наша історія</span>
          <span className={styles.eyeLine} />
        </div>

        <div className={styles.grid}>
          {story.map((item) => (
            <div key={item.year} className={styles.item}>
              <div className={styles.year} data-year={item.year}>{item.year}</div>
              <div className={styles.line} />
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
