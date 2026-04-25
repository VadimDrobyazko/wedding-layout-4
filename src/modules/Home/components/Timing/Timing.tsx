import styles from './Timing.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'

export default function Timing() {
  const { timeline } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Розклад</p>
      <h2 className={styles.title}>Програма дня</h2>

      <ul className={styles.list}>
        {timeline.map((ev, i) => (
          <li
            key={ev.time}
            className={`${styles.item} ${ev.isDim ? styles.dim : ''}`}
            ref={ref}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className={styles.time}>{ev.time}</span>
            <div className={styles.dot} aria-hidden='true' />
            <div className={styles.info}>
              <span className={styles.eventName}>{ev.event}</span>
              {ev.sub && <span className={styles.sub}>{ev.sub}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
