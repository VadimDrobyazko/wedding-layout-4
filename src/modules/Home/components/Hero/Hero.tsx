import styles from './Hero.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'

export default function Hero() {
  const { couple, event } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <svg
        className={styles.ornamentTop}
        width='320'
        height='160'
        viewBox='0 0 320 160'
        fill='none'
        aria-hidden='true'
      >
        <path
          d='M160 0 C120 40, 60 40, 20 80 C60 80, 100 60, 160 80 C220 60, 260 80, 300 80 C260 40, 200 40, 160 0Z'
          fill='#8A7A63'
        />
        <path
          d='M160 30 C130 55, 90 55, 60 75 C90 75, 120 62, 160 75 C200 62, 230 75, 260 75 C230 55, 190 55, 160 30Z'
          fill='#BFAF98'
          opacity='0.6'
        />
        <ellipse cx='160' cy='10' rx='4' ry='4' fill='#8A7A63' />
        <ellipse cx='60' cy='82' rx='3' ry='3' fill='#BFAF98' />
        <ellipse cx='260' cy='82' rx='3' ry='3' fill='#BFAF98' />
      </svg>

      <p className={styles.preText}>{event.preText}</p>

      <h1 className={styles.names}>
        {couple.bride}
        <span className={styles.ampersand}>&amp;</span>
        {couple.groom}
      </h1>

      <div className={styles.divider} aria-hidden='true'>
        <div className={styles.dividerLine} />
        <div className={styles.dividerDiamond} />
        <div className={styles.dividerLine} />
      </div>

      <div className={styles.meta}>
        <span className={styles.date}>{event.dateShort}</span>
        <span className={styles.city}>{event.city}</span>
      </div>

      <div className={styles.scrollHint} aria-hidden='true'>
        <div className={styles.scrollLine} />
      </div>

      <svg
        className={styles.ornamentBottom}
        width='320'
        height='160'
        viewBox='0 0 320 160'
        fill='none'
        aria-hidden='true'
      >
        <path
          d='M160 0 C120 40, 60 40, 20 80 C60 80, 100 60, 160 80 C220 60, 260 80, 300 80 C260 40, 200 40, 160 0Z'
          fill='#8A7A63'
        />
        <path
          d='M160 30 C130 55, 90 55, 60 75 C90 75, 120 62, 160 75 C200 62, 230 75, 260 75 C230 55, 190 55, 160 30Z'
          fill='#BFAF98'
          opacity='0.6'
        />
        <ellipse cx='160' cy='10' rx='4' ry='4' fill='#8A7A63' />
        <ellipse cx='60' cy='82' rx='3' ry='3' fill='#BFAF98' />
        <ellipse cx='260' cy='82' rx='3' ry='3' fill='#BFAF98' />
      </svg>
    </section>
  )
}
