import { WeddingConfigProvider } from '@context/WeddingConfigContext'
import { GuestProvider } from '@context/GuestContext'
import config from '@config/wedding.config'
import MainLayout from '@layouts/main/MainLayout'
import Home from '@modules/Home/page/Home'
import PageLoader from './components/PageLoader/PageLoader'
import { usePageLoader } from '@hooks/usePageLoader'
import './App.css'

export default function App() {
  const { progress, done } = usePageLoader()
  return (
    <WeddingConfigProvider value={config}>
      <GuestProvider value={null}>
        <PageLoader progress={progress} done={done} />
        <MainLayout>
          <Home />
        </MainLayout>
      </GuestProvider>
    </WeddingConfigProvider>
  )
}
