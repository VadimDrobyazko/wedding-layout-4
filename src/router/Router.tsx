import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@layouts/index'
import WeddingPage from '@modules/Home/page/WeddingPage'

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to='/demo' replace />} />
        <Route path=':slug' element={<WeddingPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/demo' replace />} />
    </Routes>
  )
}
