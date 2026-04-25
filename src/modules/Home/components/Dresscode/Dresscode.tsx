import styles from './Dresscode.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'

export default function Dresscode() {
  const { dresscode } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Дрес-код</p>
      <h2 className={styles.title}>Палітра кольорів</h2>
      <p className={styles.hint}>{dresscode.hint}</p>

      <div className={styles.palette}>
        {dresscode.palette.map(({ hex, name }, i) => (
          <div
            key={hex}
            className={styles.swatch}
            ref={ref}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.circle} style={{ backgroundColor: hex }} />
            <span className={styles.colorName}>{name}</span>
            <span className={styles.hex}>{hex}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
