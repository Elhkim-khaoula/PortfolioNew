import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/portfolioData'

const initialForm = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Veuillez saisir votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Veuillez saisir un email valide.'
    if (!form.subject.trim()) nextErrors.subject = 'Veuillez saisir un objet.'
    if (form.message.trim().length < 12) nextErrors.message = 'Veuillez saisir un message plus détaillé.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('')
      return
    }

    // TODO: Intégrer EmailJS ici avec les vrais serviceId, templateId et publicKey.
    setStatus('Votre message est prêt à être envoyé après intégration EmailJS.')
    setForm(initialForm)
  }

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-shell">
        <motion.div
          className="glass-card mb-14 rounded-lg p-6 text-center sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Construisons ensemble une expérience digitale utile.
          </h2>
          <p className="muted mx-auto mt-4 max-w-2xl leading-7">
            Vous avez une opportunité, un stage ou un projet à me proposer ? N’hésitez pas à me contacter.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="primary-button">
              <FiMail aria-hidden="true" />
              Envoyer un email
            </a>
            <a href={profile.linkedin} className="secondary-button">
              <FaLinkedinIn aria-hidden="true" />
              Voir mon LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle title="Restons en contact" subtitle="Informations directes pour une prise de contact rapide." align="left" />
            <div className="space-y-3">
              {[
                [FiMail, 'Email', profile.email, `mailto:${profile.email}`],
                [FiPhone, 'Téléphone', profile.phone, `tel:${profile.phone}`],
                [FiMapPin, 'Localisation', profile.location, '#accueil'],
                [FaGithub, 'GitHub', 'Elhkim-khaoula', profile.github],
                [FaLinkedinIn, 'LinkedIn', 'Khaoula Elhkim', profile.linkedin],
              ].map(([Icon, label, value, href]) => (
                <a key={label} href={href} className="glass-card flex items-center gap-4 rounded-lg p-4 transition hover:border-[rgba(57,165,255,0.5)]">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-[rgba(8,123,255,0.16)] text-[var(--primary-light)]">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[var(--text-secondary)]">{label}</span>
                    <span className="font-extrabold text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="glass-card rounded-lg p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-bold text-white">Nom</span>
                <input name="name" value={form.name} onChange={updateField} className="rounded-md border border-[var(--border)] bg-[#050810] px-4 py-3 text-white" />
                {errors.name && <span className="text-sm text-red-300">{errors.name}</span>}
              </label>
              <label className="grid gap-2">
                <span className="font-bold text-white">Email</span>
                <input name="email" type="email" value={form.email} onChange={updateField} className="rounded-md border border-[var(--border)] bg-[#050810] px-4 py-3 text-white" />
                {errors.email && <span className="text-sm text-red-300">{errors.email}</span>}
              </label>
            </div>
            <label className="mt-5 grid gap-2">
              <span className="font-bold text-white">Objet</span>
              <input name="subject" value={form.subject} onChange={updateField} className="rounded-md border border-[var(--border)] bg-[#050810] px-4 py-3 text-white" />
              {errors.subject && <span className="text-sm text-red-300">{errors.subject}</span>}
            </label>
            <label className="mt-5 grid gap-2">
              <span className="font-bold text-white">Message</span>
              <textarea name="message" rows="6" value={form.message} onChange={updateField} className="resize-y rounded-md border border-[var(--border)] bg-[#050810] px-4 py-3 text-white" />
              {errors.message && <span className="text-sm text-red-300">{errors.message}</span>}
            </label>
            {status && <p className="mt-4 rounded-md border border-[rgba(57,165,255,0.3)] bg-[rgba(8,123,255,0.12)] p-3 text-sm font-bold text-white">{status}</p>}
            <button type="submit" className="primary-button mt-6 w-full">
              <FiSend aria-hidden="true" />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
