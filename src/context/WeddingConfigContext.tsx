import { createContext, useContext } from 'react'
import type { WeddingConfig } from '@config/wedding.config'

const WeddingConfigContext = createContext<WeddingConfig | null>(null)

export const WeddingConfigProvider = WeddingConfigContext.Provider

export function useWeddingConfig(): WeddingConfig {
  const ctx = useContext(WeddingConfigContext)
  if (!ctx) throw new Error('useWeddingConfig must be used within WeddingConfigProvider')
  return ctx
}
