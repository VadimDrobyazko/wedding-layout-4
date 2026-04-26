import { useWeddingConfig } from '@context/WeddingConfigContext'
import { CornerFlourish } from '../Decorations/Decorations'
import styles from './Organizers.module.css'

export default function Organizers() {
  const { organizers } = useWeddingConfig()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyeLine} />
          <span>Контакти</span>
          <span className={styles.eyeLine} />
        </div>
        <h2 className={styles.title}>Організатори</h2>
        <p className={styles.sub}>З усіх питань — наші весільні координатори</p>

        <div className={styles.grid}>
          {organizers.map((p, i) => (
            <div key={i} className={styles.card}>
              <CornerFlourish className={`${styles.corner} ${styles.cornerTl}`} size={70} />
              <CornerFlourish className={`${styles.corner} ${styles.cornerTr}`} size={70} />
              <CornerFlourish className={`${styles.corner} ${styles.cornerBl}`} size={70} />
              <CornerFlourish className={`${styles.corner} ${styles.cornerBr}`} size={70} />
              <div className={styles.role}>{p.role}</div>
              <div className={styles.name}>{p.name}</div>
              <a className={styles.phone} href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
