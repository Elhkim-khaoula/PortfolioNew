import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/portfolioData'

const Counter = ({ value, suffix }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 900, 1)
      setCount(Math.round(value * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const Stats = () => (
  <section className="py-10">
    <div className="page-shell">
      <motion.div
        className="futuristic-card grid rounded-[32px] p-5 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {stats.map((item, index) => (
          <div key={item.label} className={`p-6 text-center ${index ? 'border-t border-[var(--border)] sm:border-l sm:border-t-0' : ''}`}>
            <p className="blue-gradient-text text-4xl font-extrabold sm:text-5xl">
              <Counter value={item.value} suffix={item.suffix} />
            </p>
            <p className="muted mt-2 text-sm font-bold uppercase tracking-[0.12em]">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Stats
