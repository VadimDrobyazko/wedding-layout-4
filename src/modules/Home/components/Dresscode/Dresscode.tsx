import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './Dresscode.module.css'

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
        <h2 className={styles.title}>Палітра вечора</h2>
        <p className={styles.sub}>{dresscode.hint}</p>

        <div className={styles.palette}>
          {dresscode.palette.map(({ hex, name }, i) => (
            <div key={hex} className={styles.swatch}>
              <div className={styles.circle} style={{ background: hex }}>
                <svg className={styles.circleOrn} viewBox="0 0 60 60" fill="none" width="100%" height="100%" aria-hidden="true">
                  <circle
                    cx="30" cy="30" r="28"
                    stroke={i < 2 ? '#bfcfb8' : 'rgba(255,255,255,0.6)'}
                    strokeWidth="0.5"
                    strokeDasharray="2 4"
                  />
                </svg>
              </div>
              <div className={styles.colorName}>{name}</div>
              <div className={styles.hex}>{hex}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
