import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Timing.module.css'

export default function Timing() {
  const { timeline } = useWeddingConfig()
  const reveal = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>День весілля</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title} data-title="Програма">Програма</h2>
        <p className={styles.sub}>Маршрут нашого найважливішого дня</p>

        <div className={styles.list}>
          {timeline.map((it, i) => (
            <div
              key={it.time}
              ref={reveal}
              className={`${styles.block} ${it.isDim ? styles.dim : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.blockHead}>
                <div className={styles.blockTime}>{it.time}</div>
                <div className={styles.blockNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className={styles.blockEvent}>{it.event}</div>
              {it.sub && <div className={styles.blockSub}>{it.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
