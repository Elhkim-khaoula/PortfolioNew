import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import MagneticButton from './MagneticButton'
import { profile } from '../data/portfolioData'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactCTA = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (form.message.trim().length < 12) {
      nextErrors.message = 'Please enter a more detailed message.'
    }
    return nextErrors
  }

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: '', message: '' })
      return
    }

    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()

      if (!response.ok) {
        setErrors(data.errors || {})
        setStatus({
          type: 'error',
          message: data.message || 'Unable to send the message right now.',
        })
        return
      }

      setForm(initialForm)
      setErrors({})
      setStatus({ type: 'success', message: data.message })
    } catch {
      setStatus({
        type: 'error',
        message: 'The contact server is unavailable. Restart npm run dev.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-space">
      <div className="page-shell">
        <motion.div
          className="futuristic-card relative overflow-hidden rounded-[36px] p-8 sm:p-14"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -left-24 top-12 h-56 w-56 rotate-12 rounded-[48px] border border-white/10 bg-white/[0.04]" />
          <div className="absolute -right-20 bottom-8 h-64 w-64 -rotate-12 rounded-[60px] border border-[rgba(164,222,255,0.18)] bg-[rgba(77,184,255,0.08)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-5xl">
                Let us turn an <span className="blue-gradient-text">idea</span> into a real project.
              </h2>
              <p className="muted mt-5 max-w-2xl text-lg leading-8">
                Looking for a motivated developer for an internship, mission, or junior opportunity? Get in touch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href={`mailto:${profile.email}`} className="primary-button">
                  <FiMail aria-hidden="true" />
                  Contact me
                </MagneticButton>
                <MagneticButton href={profile.linkedin} className="secondary-button">
                  <FaLinkedinIn aria-hidden="true" />
                  View LinkedIn
                </MagneticButton>
              </div>
              <div className="muted mt-8 space-y-2 text-sm font-bold">
                <p>Email: {profile.email}</p>
                <p>Phone: {profile.phone}</p>
                <p>Location: {profile.location}</p>
              </div>
            </div>

            <form className="theme-panel rounded-[28px] border border-[var(--border)] p-5 backdrop-blur" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-extrabold text-white">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    className="theme-input rounded-2xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--blue-3)]"
                    autoComplete="name"
                  />
                  {errors.name && <span className="text-sm text-red-300">{errors.name}</span>}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-extrabold text-white">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                    className="theme-input rounded-2xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--blue-3)]"
                    autoComplete="email"
                  />
                  {errors.email && <span className="text-sm text-red-300">{errors.email}</span>}
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-sm font-extrabold text-white">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  className="theme-input rounded-2xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--blue-3)]"
                />
                {errors.subject && <span className="text-sm text-red-300">{errors.subject}</span>}
              </label>

              <label className="mt-4 grid gap-2">
                <span className="text-sm font-extrabold text-white">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="6"
                  className="theme-input resize-y rounded-2xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--blue-3)]"
                />
                {errors.message && <span className="text-sm text-red-300">{errors.message}</span>}
              </label>

              {status.message && (
                <p
                  className={`mt-4 rounded-2xl border p-4 text-sm font-bold ${
                    status.type === 'success'
                      ? 'border-[rgba(77,184,255,0.45)] bg-[rgba(77,184,255,0.12)] text-white'
                      : 'border-red-300/35 bg-red-500/10 text-red-200'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button type="submit" className="primary-button mt-5 w-full" disabled={sending}>
                <FiSend aria-hidden="true" />
                {sending ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
