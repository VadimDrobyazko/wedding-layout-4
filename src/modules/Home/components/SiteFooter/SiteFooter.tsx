import { useWeddingConfig } from '@context/WeddingConfigContext'
import { Divider } from '../Decorations/Decorations'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  const { couple, event } = useWeddingConfig()

  return (
    <footer className={styles.footer}>
      <Divider color="#7a8f6f" />
      <div className={styles.names}>
        {couple.bride} <span className={styles.amp}>&amp;</span> {couple.groom}
      </div>
      <div className={styles.date}>{event.dateDisplay}</div>
      <div className={styles.mark}>з любов'ю</div>
    </footer>
  )
}
