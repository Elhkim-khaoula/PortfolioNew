import 'dotenv/config'
import { createServer } from 'node:http'
import nodemailer from 'nodemailer'

const port = Number(process.env.CONTACT_PORT || 3001)
const gmailUser = process.env.GMAIL_USER || 'khaoulaelhkim@gmail.com'
const gmailTo = process.env.GMAIL_TO || gmailUser
const gmailPassword = process.env.GMAIL_APP_PASSWORD

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  response.end(JSON.stringify(payload))
}

const readBody = (request) =>
  new Promise((resolve, reject) => {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 1_000_000) {
        request.destroy()
        reject(new Error('Payload too large.'))
      }
    })
    request.on('end', () => resolve(body))
    request.on('error', reject)
  })

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const validateContact = ({ name, email, subject, message }) => {
  const errors = {}
  if (!name?.trim()) errors.name = 'Name is required.'
  if (!isEmail(email || '')) errors.email = 'A valid email address is required.'
  if (!subject?.trim()) errors.subject = 'Subject is required.'
  if (!message?.trim() || message.trim().length < 12) {
    errors.message = 'Message must contain at least 12 characters.'
  }
  return errors
}

const transporter = gmailPassword
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword.replace(/\s/g, ''),
      },
    })
  : null

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {})
    return
  }

  if (request.url !== '/api/contact' || request.method !== 'POST') {
    sendJson(response, 404, { message: 'Route not found.' })
    return
  }

  if (!transporter) {
    sendJson(response, 500, {
      message: 'Missing email configuration. Add GMAIL_APP_PASSWORD to .env.',
    })
    return
  }

  try {
    const payload = JSON.parse(await readBody(request))
    const errors = validateContact(payload)

    if (Object.keys(errors).length > 0) {
      sendJson(response, 400, { message: 'Please correct the form.', errors })
      return
    }

    const name = payload.name.trim()
    const email = payload.email.trim()
    const subject = payload.subject.trim()
    const message = payload.message.trim()

    await transporter.sendMail({
      from: `"Portfolio Khaoula" <${gmailUser}>`,
      to: gmailTo,
      replyTo: email,
      subject: `Portfolio - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New message from the portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    sendJson(response, 200, { message: 'Your message has been sent successfully.' })
  } catch (error) {
    console.error(error)
    sendJson(response, 500, {
      message: 'Unable to send the message right now.',
    })
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Contact mail server listening on http://127.0.0.1:${port}`)
})
