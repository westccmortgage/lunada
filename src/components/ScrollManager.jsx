import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * Scroll handling for a client-routed page.
 *  - URL has a #hash: wait until that element exists (the section may render after
 *    the route change), then scroll to it. CSS scroll-margin-top keeps it below the
 *    fixed header. Re-checked once fonts have loaded because layout shifts then.
 *  - No hash on a new navigation: start at the top. Back/forward keeps the browser's own restore.
 */
export default function ScrollManager() {
  const { pathname, hash, key, state } = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    if (state && state.langSwitch) return undefined // switching language keeps the reader's place
    if (!hash) {
      if (navType !== 'POP') window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let raf = 0
    let frames = 0
    let userMoved = false
    let timer = 0

    const jump = () => {
      if (!id || id === 'top') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        return true
      }
      const el = document.getElementById(id)
      if (!el) return false
      el.scrollIntoView({ block: 'start', behavior: 'instant' })
      return true
    }

    const stop = () => {
      userMoved = true
    }
    window.addEventListener('wheel', stop, { passive: true })
    window.addEventListener('touchstart', stop, { passive: true })
    window.addEventListener('keydown', stop)

    const settle = () => {
      if (userMoved) return
      jump()
    }

    const tick = () => {
      if (userMoved) return
      if (jump()) {
        // layout can still move (fonts, images, reveal transitions): settle again
        if (document.fonts?.ready) document.fonts.ready.then(settle).catch(() => {})
        timer = window.setTimeout(settle, 450)
        return
      }
      if (frames++ < 90) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
      window.removeEventListener('wheel', stop)
      window.removeEventListener('touchstart', stop)
      window.removeEventListener('keydown', stop)
    }
  }, [pathname, hash, key, navType])

  return null
}
