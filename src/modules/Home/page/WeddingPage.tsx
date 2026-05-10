import { useParams, Navigate } from 'react-router-dom'
import { clients } from '@clients/index'
import { WeddingConfigProvider } from '@context/WeddingConfigContext'
import { GuestProvider } from '@context/GuestContext'
import Home from './Home'

export default function WeddingPage() {
  const { slug, guestSlug } = useParams<{ slug: string; guestSlug?: string }>()
  const config = slug ? clients[slug] : undefined

  if (!config) return <Navigate to='/demo' replace />

  const guest = guestSlug ? (config.guests.find(g => g.slug === guestSlug) ?? null) : null

  return (
    <WeddingConfigProvider value={config}>
      <GuestProvider value={guest}>
        <Home />
      </GuestProvider>
    </WeddingConfigProvider>
  )
}
