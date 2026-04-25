import { useCallback } from 'react'

export function useReveal(visibleClass: string) {
  return useCallback(
    (el: HTMLElement | null) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(visibleClass)
            observer.disconnect()
          }
        },
        { threshold: 0.12 },
      )
      observer.observe(el)
    },
    [visibleClass],
  )
}
