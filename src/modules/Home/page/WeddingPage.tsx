import { useParams, Navigate } from 'react-router-dom'
import { clients } from '@clients/index'
import { WeddingConfigProvider } from '@context/WeddingConfigContext'
import Home from './Home'

export default function WeddingPage() {
  const { slug } = useParams<{ slug: string }>()
  const config = slug ? clients[slug] : undefined

  if (!config) return <Navigate to='/demo' replace />

  return (
    <WeddingConfigProvider value={config}>
      <Home />
    </WeddingConfigProvider>
  )
}
