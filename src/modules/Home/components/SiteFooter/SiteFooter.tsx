import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import { Divider } from '../Decorations/Decorations'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  const { couple, event } = useWeddingConfig()
  const reveal = useReveal(styles.visible)

  return (
    <footer className={styles.footer}>
      <Divider color="#9b7e74" />
      <div ref={reveal} className={styles.names}>
        {couple.bride} <span className={styles.amp}>&amp;</span> {couple.groom}
      </div>
      <div className={styles.date}>{event.dateDisplay}</div>
      <div className={styles.mark}>з любов'ю</div>
      <a
        className={styles.credit}
        href="https://www.instagram.com/invite.me.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        DESIGNED BY INVITE.ME.LINK
      </a>
    </footer>
  )
}
