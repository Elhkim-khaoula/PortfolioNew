import nodemailer from 'nodemailer'

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (response, statusCode, payload) => {
  response.status(statusCode).json(payload)
}

const normalizeContactPayload = (body = {}) => ({
  name: String(body.name || '').trim(),
  email: String(body.email || '').trim(),
  subject: String(body.subject || '').trim(),
  message: String(body.message || '').trim(),
  company: String(body.company || '').trim(),
})

const parseRequestBody = (body) => {
  if (!body) return {}
  if (typeof body === 'object') return body

  try {
    return JSON.parse(body)
  } catch {
    return null
  }
}

const validateContact = ({ name, email, subject, message }) => {
  const errors = {}

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length > MAX_LENGTHS.name) errors.name = `Name must be ${MAX_LENGTHS.name} characters or fewer.`

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  else if (email.length > MAX_LENGTHS.email) errors.email = `Email must be ${MAX_LENGTHS.email} characters or fewer.`

  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length > MAX_LENGTHS.subject) errors.subject = `Subject must be ${MAX_LENGTHS.subject} characters or fewer.`

  if (!message) errors.message = 'Please enter your message.'
  else if (message.length < 12) errors.message = 'Please enter a more detailed message.'
  else if (message.length > MAX_LENGTHS.message) errors.message = `Message must be ${MAX_LENGTHS.message} characters or fewer.`

  return errors
}

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

const getSmtpConfig = () => {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO

  if (!host || !Number.isInteger(port) || port <= 0 || !user || !pass || !to) {
    return null
  }

  return {
    transport: {
      host,
      port,
      secure: String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465,
      auth: {
        user,
        pass: pass.replace(/\s/g, ''),
      },
    },
    from: process.env.CONTACT_FROM || user,
    to,
  }
}

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS')
    return json(response, 405, {
      success: false,
      message: 'Method not allowed.',
    })
  }

  const body = parseRequestBody(request.body)

  if (body === null) {
    return json(response, 400, {
      success: false,
      message: 'Please send a valid JSON request.',
    })
  }

  const payload = normalizeContactPayload(body)

  if (payload.company) {
    return json(response, 200, {
      success: true,
      message: 'Thanks, your message has been sent.',
    })
  }

  const errors = validateContact(payload)
  if (Object.keys(errors).length > 0) {
    return json(response, 400, {
      success: false,
      message: 'Please correct the highlighted fields.',
      errors,
    })
  }

  const config = getSmtpConfig()
  if (!config) {
    console.error('Missing SMTP contact form configuration.')
    return json(response, 500, {
      success: false,
      code: 'SMTP_CONFIG_MISSING',
      message: 'The contact form is not configured yet.',
    })
  }

  try {
    const transporter = nodemailer.createTransport(config.transport)

    await transporter.sendMail({
      from: `"Portfolio Contact" <${config.from}>`,
      to: config.to,
      replyTo: payload.email,
      subject: `Portfolio - ${payload.subject}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Subject: ${payload.subject}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
      html: `
        <h2>New message from the portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return json(response, 200, {
      success: true,
      message: 'Thanks, your message has been sent.',
    })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return json(response, 500, {
      success: false,
      code: 'SMTP_SEND_FAILED',
      message: 'Unable to send the message right now. Please try again later.',
    })
  }
}
