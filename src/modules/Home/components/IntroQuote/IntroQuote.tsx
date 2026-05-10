import { useWeddingConfig } from '@context/WeddingConfigContext'
import { Divider } from '../Decorations/Decorations'
import styles from './IntroQuote.module.css'

export default function IntroQuote() {
  const { intro } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <Divider color="#c4a39a" />
      <p className={styles.quote}>«{intro.quote}»</p>
      <div className={styles.attrib}>— {intro.attrib}</div>
      <Divider color="#c4a39a" />
    </section>
  )
}
