import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useCountdown } from '@hooks/useCountdown'
import styles from './Countdown.module.css'

export default function Countdown() {
  const { event } = useWeddingConfig()
  const { days, hours, minutes, seconds } = useCountdown(event.date)

  const items = [
    { label: 'Днів',   value: days },
    { label: 'Годин',  value: hours },
    { label: 'Хвилин', value: minutes },
    { label: 'Секунд', value: seconds },
  ]

  return (
    <div className={styles.countdown}>
      {items.map((it, i) => (
        <div key={it.label} className={styles.group}>
          <div className={styles.cell}>
            <div className={styles.num}>{String(it.value).padStart(2, '0')}</div>
            <div className={styles.lbl}>{it.label}</div>
          </div>
          {i < items.length - 1 && (
            <div className={styles.sep} aria-hidden="true">
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                <path d="M10 22 C 8 19, 5 19, 5 22 C 5 25, 10 28, 10 28 C 10 28, 15 25, 15 22 C 15 19, 12 19, 10 22 Z" fill="#a8bfa1" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
