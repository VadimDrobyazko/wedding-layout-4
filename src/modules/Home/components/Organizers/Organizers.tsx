import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Organizers.module.css'

export default function Organizers() {
  const { organizers, telegram } = useWeddingConfig()
  const reveal = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div ref={reveal} className={styles.inner}>
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

        <a className={styles.tgLink} href={telegram.link} target="_blank" rel="noopener noreferrer">
          Долучитися до групи
        </a>
      </div>
    </section>
  )
}
