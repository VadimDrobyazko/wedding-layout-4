import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './Calendar.module.css'

const WEEK_DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД']

const MONTHS_UA = [
  'СІЧЕНЬ', 'ЛЮТИЙ', 'БЕРЕЗЕНЬ', 'КВІТЕНЬ', 'ТРАВЕНЬ', 'ЧЕРВЕНЬ',
  'ЛИПЕНЬ', 'СЕРПЕНЬ', 'ВЕРЕСЕНЬ', 'ЖОВТЕНЬ', 'ЛИСТОПАД', 'ГРУДЕНЬ',
]

export default function Calendar() {
  const { event } = useWeddingConfig()
  const { year, month, day: weddingDay } = event // month is 0-indexed

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDow = new Date(year, month, 1).getDay()
  const offset = (firstDow + 6) % 7 // Mon=0 … Sun=6

  const cells: (number | null)[] = [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const ACCENT = '#7a8f6f'

  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>
        <span className={styles.eyeLine} />
        <span>Збережіть дату</span>
        <span className={styles.eyeLine} />
      </div>
      <h2 className={styles.title}>Коли</h2>
      <p className={styles.sub}>Запам'ятайте цей день — ми будемо щасливі бачити вас поруч</p>

      <div className={styles.calendarWrap}>
        <div className={styles.calendarCard}>
          {/* Corner SVGs */}
          <svg className={`${styles.calCorner} ${styles.calCornerTl}`} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
            <path d="M5 65 C 5 35, 15 15, 35 8 C 50 4, 60 5, 65 8" stroke={ACCENT} strokeWidth="0.9" strokeLinecap="round" />
            <path d="M18 50 C 14 44, 12 46, 12 52 C 18 54, 22 52, 18 50 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M30 30 C 26 24, 24 26, 24 32 C 30 34, 34 32, 30 30 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M48 14 C 44 8, 42 10, 42 16 C 48 18, 52 16, 48 14 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <circle cx="62" cy="8" r="2.5" fill={ACCENT} fillOpacity="0.5" stroke={ACCENT} strokeWidth="0.6" />
          </svg>
          <svg className={`${styles.calCorner} ${styles.calCornerTr}`} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
            <path d="M5 65 C 5 35, 15 15, 35 8 C 50 4, 60 5, 65 8" stroke={ACCENT} strokeWidth="0.9" strokeLinecap="round" />
            <path d="M18 50 C 14 44, 12 46, 12 52 C 18 54, 22 52, 18 50 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M30 30 C 26 24, 24 26, 24 32 C 30 34, 34 32, 30 30 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M48 14 C 44 8, 42 10, 42 16 C 48 18, 52 16, 48 14 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <circle cx="62" cy="8" r="2.5" fill={ACCENT} fillOpacity="0.5" stroke={ACCENT} strokeWidth="0.6" />
          </svg>
          <svg className={`${styles.calCorner} ${styles.calCornerBl}`} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" style={{ transform: 'scaleY(-1)' }}>
            <path d="M5 65 C 5 35, 15 15, 35 8 C 50 4, 60 5, 65 8" stroke={ACCENT} strokeWidth="0.9" strokeLinecap="round" />
            <path d="M18 50 C 14 44, 12 46, 12 52 C 18 54, 22 52, 18 50 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M30 30 C 26 24, 24 26, 24 32 C 30 34, 34 32, 30 30 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M48 14 C 44 8, 42 10, 42 16 C 48 18, 52 16, 48 14 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <circle cx="62" cy="8" r="2.5" fill={ACCENT} fillOpacity="0.5" stroke={ACCENT} strokeWidth="0.6" />
          </svg>
          <svg className={`${styles.calCorner} ${styles.calCornerBr}`} width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true" style={{ transform: 'scale(-1, -1)' }}>
            <path d="M5 65 C 5 35, 15 15, 35 8 C 50 4, 60 5, 65 8" stroke={ACCENT} strokeWidth="0.9" strokeLinecap="round" />
            <path d="M18 50 C 14 44, 12 46, 12 52 C 18 54, 22 52, 18 50 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M30 30 C 26 24, 24 26, 24 32 C 30 34, 34 32, 30 30 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <path d="M48 14 C 44 8, 42 10, 42 16 C 48 18, 52 16, 48 14 Z" fill={ACCENT} fillOpacity="0.4" stroke={ACCENT} strokeWidth="0.6" />
            <circle cx="62" cy="8" r="2.5" fill={ACCENT} fillOpacity="0.5" stroke={ACCENT} strokeWidth="0.6" />
          </svg>

          {/* Header */}
          <div className={styles.calHead}>
            <div className={styles.calMonthLabel}>
              <span className={styles.calLine} />
              <span className={styles.calMonthText}>{MONTHS_UA[month]}</span>
              <span className={styles.calLine} />
            </div>
            <div className={styles.calYear}>{year}</div>
          </div>

          {/* Weekday row */}
          <div className={styles.calWeekdays}>
            {WEEK_DAYS.map((d) => (
              <div key={d} className={styles.calWd}>{d}</div>
            ))}
          </div>

          {/* Days grid */}
          <div className={styles.calGrid}>
            {cells.map((d, i) => {
              const isWedding = d === weddingDay
              const dow = i % 7
              const isWeekend = dow >= 5
              return (
                <div
                  key={i}
                  className={`${styles.calCell} ${d == null ? styles.isEmpty : ''} ${isWeekend ? styles.isWeekend : ''} ${isWedding ? styles.isWedding : ''}`}
                >
                  {isWedding ? (
                    <div className={styles.calWeddingMark}>
                      <svg viewBox="0 0 60 60" width="56" height="56" fill="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stopColor="#a8bfa1" />
                            <stop offset="1" stopColor="#7a8f6f" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M30 50 C 30 50, 8 38, 8 22 C 8 13, 15 8, 22 8 C 26 8, 29 11, 30 14 C 31 11, 34 8, 38 8 C 45 8, 52 13, 52 22 C 52 38, 30 50, 30 50 Z"
                          fill="url(#heartGrad)" stroke={ACCENT} strokeWidth="1" strokeLinejoin="round"
                        />
                        <path d="M12 18 C 8 16, 4 18, 4 22 C 8 24, 12 22, 12 18 Z" fill={ACCENT} fillOpacity="0.5" />
                        <path d="M48 18 C 52 16, 56 18, 56 22 C 52 24, 48 22, 48 18 Z" fill={ACCENT} fillOpacity="0.5" />
                      </svg>
                      <span className={styles.calWeddingNum}>{d}</span>
                    </div>
                  ) : (
                    <span>{d}</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className={styles.calFooter}>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M7 11 C 7 11, 1 7, 1 4 C 1 2, 2.5 1, 4 1 C 5 1, 6 1.5, 7 3 C 8 1.5, 9 1, 10 1 C 11.5 1, 13 2, 13 4 C 13 7, 7 11, 7 11 Z" fill={ACCENT} />
            </svg>
            <span>Save the date</span>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M7 11 C 7 11, 1 7, 1 4 C 1 2, 2.5 1, 4 1 C 5 1, 6 1.5, 7 3 C 8 1.5, 9 1, 10 1 C 11.5 1, 13 2, 13 4 C 13 7, 7 11, 7 11 Z" fill={ACCENT} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
