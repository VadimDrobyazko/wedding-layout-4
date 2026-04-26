import { useWeddingConfig } from '@context/WeddingConfigContext'
import { photoUrl } from '@utils/photo'
import styles from './Hero.module.css'

export default function Hero() {
  const { couple, event, hero } = useWeddingConfig()

  return (
    <section className={styles.hero}>
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${photoUrl(hero.photo)})` }}
      />
      <div
        className={styles.heroOverlay}
        style={{ background: `rgba(36, 44, 33, ${hero.dim})` }}
      />
      <div className={styles.heroGrain} />

      <div className={styles.heroFrameTop} aria-hidden="true">
        <svg viewBox="0 0 800 100" preserveAspectRatio="xMidYMid meet" fill="none">
          <line x1="100" y1="50" x2="340" y2="50" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <line x1="460" y1="50" x2="700" y2="50" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <g transform="translate(400, 50)">
            <path d="M-50 0 C -40 -8, -28 -10, -22 -3 C -28 4, -40 6, -50 0 Z" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.7" />
            <path d="M50 0 C 40 -8, 28 -10, 22 -3 C 28 4, 40 6, 50 0 Z" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.7" />
            <path d="M-50 0 C -40 8, -28 10, -22 3" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
            <path d="M50 0 C 40 8, 28 10, 22 3" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="6" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.9)" />
          </g>
        </svg>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className={styles.heLine} />
          <span>Весільний день</span>
          <span className={styles.heLine} />
        </div>

        <h1 className={styles.heroNames}>
          <span className={styles.heroName}>{couple.bride}</span>
          <span className={styles.heroAmp} aria-hidden="true">
            <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
              <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.45)" strokeWidth="0.6" />
              <circle cx="40" cy="40" r="26" stroke="rgba(255,255,255,0.3)" strokeWidth="0.4" strokeDasharray="2 3" />
              <text x="40" y="52" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="40" fill="white" fillOpacity="0.95">&amp;</text>
            </svg>
          </span>
          <span className={styles.heroName}>{couple.groom}</span>
        </h1>

        <div className={styles.heroDate}>{event.dateDisplay}</div>
        <div className={styles.heroPlace}>{event.place}</div>
      </div>

      <div className={styles.heroFrameBottom} aria-hidden="true">
        <svg viewBox="0 0 800 60" preserveAspectRatio="xMidYMid meet" fill="none">
          <line x1="100" y1="30" x2="700" y2="30" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" />
          <circle cx="400" cy="30" r="3" fill="rgba(255,255,255,0.7)" />
          <circle cx="380" cy="30" r="1.5" fill="rgba(255,255,255,0.5)" />
          <circle cx="420" cy="30" r="1.5" fill="rgba(255,255,255,0.5)" />
        </svg>
      </div>

      <div className={styles.heroScroll} aria-hidden="true">
        <span>scroll</span>
        <svg width="14" height="40" viewBox="0 0 14 40" fill="none">
          <line x1="7" y1="0" x2="7" y2="32" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          <path d="M3 28 L 7 36 L 11 28" stroke="rgba(255,255,255,0.9)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </section>
  )
}
