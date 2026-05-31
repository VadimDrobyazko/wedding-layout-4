import { useState, useEffect } from 'react'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './PageLoader.module.css'

type Props = {
  progress: number
  done: boolean
}

export default function PageLoader({ progress, done }: Props) {
  const { couple } = useWeddingConfig()
  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    if (!done) return
    const t1 = setTimeout(() => setHiding(true), 0)
    const t2 = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [done])

  if (!visible) return null

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ''}`}>
      <div className={styles.content}>
        <div className={styles.names}>
          <span>{couple.brideEn}</span>
          <span className={styles.amp}>&amp;</span>
          <span>{couple.groomEn}</span>
        </div>
        <div className={styles.track}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
        <p className={styles.label}>запрошення формується</p>
      </div>
    </div>
  )
}
