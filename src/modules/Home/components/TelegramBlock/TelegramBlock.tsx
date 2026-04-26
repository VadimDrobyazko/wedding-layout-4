import { useWeddingConfig } from '@context/WeddingConfigContext'
import { CornerFlourish } from '../Decorations/Decorations'
import styles from './TelegramBlock.module.css'

export default function TelegramBlock() {
  const { telegram } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Залишайтесь на зв'язку</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title}>Наша Telegram-група</h2>
      </div>

      <div className={styles.card}>
        <CornerFlourish className={`${styles.corner} ${styles.cornerTl}`} size={90} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerTr}`} size={90} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerBl}`} size={90} />
        <CornerFlourish className={`${styles.corner} ${styles.cornerBr}`} size={90} />

        <div className={styles.iconWrap} aria-hidden="true">
          <svg viewBox="0 0 140 140" width="140" height="140" fill="none">
            <defs>
              <linearGradient id="tgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bfcfb8" />
                <stop offset="1" stopColor="#7a8f6f" />
              </linearGradient>
            </defs>
            <circle cx="70" cy="70" r="60" stroke="#a8bfa1" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.6" />
            <circle cx="70" cy="70" r="48" fill="url(#tgGrad)" />
            <g transform="translate(70, 70)">
              <path
                d="M-22 -2 L 22 -16 L 16 22 L 4 12 L 14 -8 L -2 8 L -22 -2 Z"
                fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round"
              />
              <path d="M-2 8 L 4 22 L 6 14" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round" />
            </g>
            <g stroke="#7a8f6f" strokeWidth="0.9" fill="none" strokeLinecap="round">
              <path d="M20 70 C 16 64, 12 66, 12 72 C 18 74, 22 72, 20 70 Z" fill="#a8bfa1" fillOpacity="0.6" />
              <path d="M120 70 C 124 64, 128 66, 128 72 C 122 74, 118 72, 120 70 Z" fill="#a8bfa1" fillOpacity="0.6" />
              <path d="M70 18 C 66 12, 62 14, 62 20 C 68 22, 72 20, 70 18 Z" fill="#a8bfa1" fillOpacity="0.6" />
              <path d="M70 122 C 66 116, 62 118, 62 124 C 68 126, 72 124, 70 122 Z" fill="#a8bfa1" fillOpacity="0.6" />
            </g>
          </svg>
        </div>

        <h3 className={styles.cardTitle}>Усі деталі — в одному місці</h3>
        <p className={styles.cardDesc}>
          Ми створили затишну Telegram-групу, де ділимося живими фото з підготовки,
          деталями про локацію та логістику, плейлистом вечора та всіма свіжими новинами.
          Долучайтеся — буде тепло і по-сімейному.
        </p>

        <div className={styles.features}>
          <div className={styles.feat}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="16" height="12" rx="1" stroke="#7a8f6f" strokeWidth="1" />
              <circle cx="8" cy="10" r="1.5" fill="#7a8f6f" />
              <path d="M3 15 L 8 11 L 12 14 L 16 9 L 19 13" stroke="#7a8f6f" strokeWidth="1" fill="none" strokeLinejoin="round" />
            </svg>
            <span>Фото та відео</span>
          </div>
          <div className={styles.featSep} aria-hidden="true" />
          <div className={styles.feat}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="8" stroke="#7a8f6f" strokeWidth="1" />
              <path d="M11 6 L 11 11 L 14 13" stroke="#7a8f6f" strokeWidth="1" fill="none" strokeLinecap="round" />
            </svg>
            <span>Розклад дня</span>
          </div>
          <div className={styles.featSep} aria-hidden="true" />
          <div className={styles.feat}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M11 18 C 11 18, 3 13, 3 8 C 3 5, 5 3, 7.5 3 C 9 3, 10.5 4, 11 5.5 C 11.5 4, 13 3, 14.5 3 C 17 3, 19 5, 19 8 C 19 13, 11 18, 11 18 Z" stroke="#7a8f6f" strokeWidth="1" fill="#a8bfa1" fillOpacity="0.4" strokeLinejoin="round" />
            </svg>
            <span>Атмосфера</span>
          </div>
        </div>

        <a className={styles.cta} href={telegram.link} target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="white" fillOpacity="0.18" />
            <path d="M5 10 L 14 6 L 12.5 15 L 9.5 12.5 L 12 8.5 L 8.5 11.5 L 5 10 Z" fill="currentColor" />
          </svg>
          <span>Долучитися до групи</span>
        </a>
        <div className={styles.handle}>{telegram.handle}</div>
      </div>
    </section>
  )
}
