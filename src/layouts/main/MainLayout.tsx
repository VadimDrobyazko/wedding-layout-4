import { Outlet } from 'react-router-dom'
import { SideBranchLeft, SideBranchRight } from '@modules/Home/components/Decorations/Decorations'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideLeft} aria-hidden="true">
        <SideBranchLeft />
      </div>
      <div className={styles.sideRight} aria-hidden="true">
        <SideBranchRight />
      </div>
      <Outlet />
      <footer style={{ textAlign: 'center', padding: '24px 16px 32px' }}>
        <a
          href="https://www.instagram.com/invite.me.link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'var(--c-mute)',
            opacity: 0.5,
            textDecoration: 'none',
            borderBottom: '1px solid currentColor',
            paddingBottom: '1px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >
          DESIGNED BY INVITE.ME.LINK
        </a>
      </footer>
    </div>
  )
}
