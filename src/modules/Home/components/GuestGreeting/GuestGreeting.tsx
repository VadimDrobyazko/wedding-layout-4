import { useGuest } from '@context/GuestContext'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import RSVPForm from '../RSVPForm/RSVPForm'
import styles from './GuestGreeting.module.css'

export default function GuestGreeting() {
  const guest = useGuest()
  const { couple } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  if (!guest) return null

  const namesStr = guest.names.join(' та ')

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Персональне запрошення</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title} data-title={`Дорогі ${namesStr}`}>Дорогі {namesStr}</h2>
        <p className={styles.sub}>
          {couple.bride} та {couple.groom} запрошують вас розділити
          з&nbsp;ними цей особливий день
        </p>
      </div>
      <RSVPForm />
    </section>
  )
}
