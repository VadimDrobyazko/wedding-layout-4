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
          {timeline.map((it, i) => {
            return (
              <div key={it.time} ref={reveal} className={`${styles.row} ${i % 2 ? styles.rev : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.rail} aria-hidden="true">
                  <div className={styles.dot} />
                </div>
                <div className={styles.text}>
                  <div className={styles.time}>
                    <span>{it.time}</span>
                    <svg className={styles.timeOrn} width="60" height="14" viewBox="0 0 60 14" fill="none" aria-hidden="true">
                      <line x1="0" y1="7" x2="22" y2="7" stroke="#c4a39a" strokeWidth="0.7" />
                      <path d="M30 7 C 26 4, 22 5, 22 9 C 26 11, 30 9, 30 7 Z" fill="#c4a39a" />
                      <path d="M30 7 C 34 4, 38 5, 38 9 C 34 11, 30 9, 30 7 Z" fill="#c4a39a" />
                      <line x1="38" y1="7" x2="60" y2="7" stroke="#c4a39a" strokeWidth="0.7" />
                    </svg>
                  </div>
                  <h3 className={styles.eventName}>{it.event}</h3>
                  <p className={styles.eventSub}>{it.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
