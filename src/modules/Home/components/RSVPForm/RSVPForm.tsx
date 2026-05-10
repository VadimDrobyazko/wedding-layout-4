import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGuest } from '@context/GuestContext'
import styles from './RSVPForm.module.css'

type Alcohol = 'yes' | 'no' | 'none'
type Status = 'idle' | 'submitting' | 'done' | 'error'

type FormState = {
  attending: boolean | null
  alcohol: Alcohol
  transfer: boolean
  note: string
}

export default function RSVPForm() {
  const guest = useGuest()
  const { slug, guestSlug } = useParams<{ slug: string; guestSlug?: string }>()
  const [form, setForm] = useState<FormState>({ attending: null, alcohol: 'yes', transfer: false, note: '' })
  const [status, setStatus] = useState<Status>('idle')

  if (!guest) return null

  async function handleSubmit() {
    if (form.attending === null) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          guestSlug,
          names: guest!.names.join(', '),
          attending: form.attending,
          alcohol: form.attending ? form.alcohol : null,
          transfer: form.attending ? form.transfer : null,
          note: form.note || null,
        }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>Дякуємо!</p>
        <p className={styles.successSub}>Вашу відповідь прийнято</p>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <p className={styles.question}>Чи будете ви з нами?</p>

      <div className={styles.attendRow}>
        <button
          type="button"
          className={`${styles.attendBtn} ${form.attending === true ? styles.attendBtnActive : ''}`}
          onClick={() => setForm(f => ({ ...f, attending: true }))}
        >
          Буду!
        </button>
        <button
          type="button"
          className={`${styles.attendBtn} ${styles.attendBtnNo} ${form.attending === false ? styles.attendBtnNoActive : ''}`}
          onClick={() => setForm(f => ({ ...f, attending: false }))}
        >
          На жаль, не зможу
        </button>
      </div>

      {form.attending === true && (
        <div className={styles.extra}>
          <div className={styles.fieldGroup}>
            <p className={styles.fieldLabel}>Алкоголь</p>
            <div className={styles.optRow}>
              {(['yes', 'no', 'none'] as Alcohol[]).map(v => (
                <button
                  key={v}
                  type="button"
                  className={`${styles.optBtn} ${form.alcohol === v ? styles.optBtnActive : ''}`}
                  onClick={() => setForm(f => ({ ...f, alcohol: v }))}
                >
                  {v === 'yes' ? 'Так' : v === 'no' ? 'Ні' : 'Не вживаю'}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <p className={styles.fieldLabel}>Трансфер</p>
            <div className={styles.optRow}>
              {([true, false] as const).map(v => (
                <button
                  key={String(v)}
                  type="button"
                  className={`${styles.optBtn} ${form.transfer === v ? styles.optBtnActive : ''}`}
                  onClick={() => setForm(f => ({ ...f, transfer: v }))}
                >
                  {v ? 'Потрібен' : 'Не потрібен'}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <p className={styles.fieldLabel}>Примітка</p>
            <textarea
              className={styles.textarea}
              placeholder="Алергія, особливі побажання..."
              value={form.note}
              onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
              rows={3}
            />
          </div>
        </div>
      )}

      {form.attending !== null && (
        <>
          <button
            type="button"
            className={styles.submit}
            onClick={handleSubmit}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Надсилаємо...' : 'Підтвердити'}
          </button>
          {status === 'error' && <p className={styles.errorMsg}>Помилка. Спробуйте ще раз.</p>}
        </>
      )}
    </div>
  )
}
