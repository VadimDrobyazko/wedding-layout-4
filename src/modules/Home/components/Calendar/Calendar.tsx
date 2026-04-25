import styles from './Calendar.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'

const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

const MONTH_NAMES = [
  'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
  'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

// returns 0=Mon … 6=Sun
function getFirstWeekday(year: number, month: number): number {
  const day = new Date(year, month - 1, 1).getDay()
  return day === 0 ? 6 : day - 1
}

export default function Calendar() {
  const { event } = useWeddingConfig()
  const { year, month, day: weddingDay } = event
  const ref = useReveal(styles.visible)

  const totalDays = getDaysInMonth(year, month)
  const startOffset = getFirstWeekday(year, month)

  const cells: (number | null)[] = [
    ...Array<null>(startOffset).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ]

  return (
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Дата свята</p>
      <h2 className={styles.monthTitle}>
        {MONTH_NAMES[month - 1]} {year}
      </h2>

      <div className={styles.wrap} ref={ref}>
        <div className={styles.grid}>
          {DAY_NAMES.map((name) => (
            <div key={name} className={styles.dayName}>{name}</div>
          ))}

          {cells.map((d, i) => {
            if (d === null) return <div key={`empty-${i}`} className={styles.empty} />
            const isWedding = d === weddingDay
            return (
              <div
                key={d}
                className={`${styles.day} ${isWedding ? styles.highlighted : ''}`}
              >
                {isWedding && <span className={styles.heart} aria-hidden='true'>♥</span>}
                <span>{d}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
