import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './Organizers.module.css'

export default function Organizers() {
  const { organizers, telegram } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Контакти</span>
          <span className={styles.eyeLine} />
        </div>

        <div className={styles.contacts}>
          {organizers.map((p) => (
            <div key={p.phone} className={styles.contact}>
              <div className={styles.role}>{p.role}</div>
              <div className={styles.name}>{p.name}</div>
              <a className={styles.phone} href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <p className={styles.tgDesc}>
          Ми створили Telegram-групу, де ділимося фото з підготовки,
          деталями про локацію та всіма свіжими новинами.
        </p>

        <div className={styles.features}>
          <div className={styles.feat}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="16" height="12" rx="1" stroke="#9b7e74" strokeWidth="1" />
              <circle cx="8" cy="10" r="1.5" fill="#9b7e74" />
              <path d="M3 15 L 8 11 L 12 14 L 16 9 L 19 13" stroke="#9b7e74" strokeWidth="1" fill="none" strokeLinejoin="round" />
            </svg>
            <span>Фото та відео</span>
          </div>
          <div className={styles.featSep} aria-hidden="true" />
          <div className={styles.feat}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="8" stroke="#9b7e74" strokeWidth="1" />
              <path d="M11 6 L 11 11 L 14 13" stroke="#9b7e74" strokeWidth="1" fill="none" strokeLinecap="round" />
            </svg>
            <span>Розклад дня</span>
          </div>
          <div className={styles.featSep} aria-hidden="true" />
          <div className={styles.feat}>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M11 18 C 11 18, 3 13, 3 8 C 3 5, 5 3, 7.5 3 C 9 3, 10.5 4, 11 5.5 C 11.5 4, 13 3, 14.5 3 C 17 3, 19 5, 19 8 C 19 13, 11 18, 11 18 Z" stroke="#9b7e74" strokeWidth="1" fill="#c4a39a" fillOpacity="0.4" strokeLinejoin="round" />
            </svg>
            <span>Атмосфера</span>
          </div>
        </div>

        <a className={styles.tgLink} href={telegram.link} target="_blank" rel="noopener noreferrer">
          Долучитися до групи
        </a>
      </div>
    </section>
  )
}
