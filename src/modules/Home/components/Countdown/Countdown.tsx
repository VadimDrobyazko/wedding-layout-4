import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useCountdown } from '@hooks/useCountdown'
import { useReveal } from '@hooks/useReveal'
import styles from './Countdown.module.css'

export default function Countdown() {
  const { event } = useWeddingConfig()
  const { days, hours, minutes, seconds } = useCountdown(event.date)
  const reveal = useReveal(styles.visible)

  const items = [
    { label: 'Днів',   value: days },
    { label: 'Годин',  value: hours },
    { label: 'Хвилин', value: minutes },
    { label: 'Секунд', value: seconds },
  ]

  return (
    <section className={styles.section} style={{ backgroundImage: "url('/images/countdown/background.webp')" }}>
    <div className={styles.countdown}>
      {items.map((it, i) => (
        <div key={it.label} ref={reveal} className={styles.group} style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className={styles.cell}>
            <div className={styles.num}>{String(it.value).padStart(2, '0')}</div>
            <div className={styles.lbl}>{it.label}</div>
          </div>
          {i < items.length - 1 && (
            <div className={styles.sep} aria-hidden="true">
              <svg className={styles.heart} width="36" height="36" viewBox="0 0 20 20" fill="none">
                <path d="M10 16 C 10 16, 2 11, 2 6 C 2 3, 4 1, 6.5 1 C 8 1, 9.5 2, 10 3.5 C 10.5 2, 12 1, 13.5 1 C 16 1, 18 3, 18 6 C 18 11, 10 16, 10 16 Z" fill="#c4a39a" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  )
}
