import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#accueil"
      className={`icon-button fixed bottom-5 right-5 z-40 shadow-xl transition ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </a>
  )
}

export default ScrollToTop
