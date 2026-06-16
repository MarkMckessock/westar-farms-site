import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], navbarHeight = 80): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let rafId: number

    const update = () => {
      const scrollY = window.scrollY + navbarHeight + 16
      let found = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          found = id
        }
      }
      setActiveId(found)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, []) // sectionIds and navbarHeight are module-level constants

  return activeId
}
