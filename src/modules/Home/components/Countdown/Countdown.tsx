import styles from './Countdown.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useCountdown } from '@hooks/useCountdown'
import { useReveal } from '@hooks/useReveal'

const UNITS = ['днів', 'годин', 'хвилин', 'секунд'] as const

export default function Countdown() {
  const { event } = useWeddingConfig()
  const { days, hours, minutes, seconds } = useCountdown(event.date)
  const ref = useReveal(styles.visible)

  const values = [days, hours, minutes, seconds]

  return (
    <section className={styles.section}>
      <p className={styles.label}>До свята залишилось</p>
      <div className={styles.grid}>
        {values.map((val, i) => (
          <div key={UNITS[i]} className={styles.card} ref={ref} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className={styles.number}>{String(val).padStart(2, '0')}</span>
            <span className={styles.unit}>{UNITS[i]}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
