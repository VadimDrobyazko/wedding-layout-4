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
    </div>
  )
}
