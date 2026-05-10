import { createContext, useContext } from 'react'
import type { Guest } from '@config/wedding.config'

const GuestContext = createContext<Guest | null>(null)

export const GuestProvider = GuestContext.Provider

export function useGuest(): Guest | null {
  return useContext(GuestContext)
}
