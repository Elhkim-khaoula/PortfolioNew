# Portfolio de Khaoula El Hkim

Modern one-page portfolio built with React, Vite, JavaScript, Tailwind CSS, Framer Motion, and React Icons.

## Installation

```bash
npm install
```

Use the normal Vite dev server when you are working on frontend-only changes:

```bash
npm run dev
```

Use the Vercel local environment when you need to test the contact form and `/api/contact`:

```bash
npm run dev:vercel
```

Production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Structure

```text
api/
  contact.js
public/
  Khaoula_El_Hkim_CV.pdf
  favicon.svg
  robots.txt
  sitemap.xml
src/
  assets/
  components/
    ContactCTA.jsx
    MobileMenu.jsx
    Navbar.jsx
    ProjectCard.jsx
    ScrollToTop.jsx
    SectionTitle.jsx
    SocialLinks.jsx
  data/
    portfolioData.js
  sections/
  App.jsx
  index.css
  main.jsx
tailwind.config.js
vite.config.js
```

## Customization

- Profile photo: replace `src/assets/profile.jpg` or update the imports that use it.
- CV: replace `public/Khaoula_El_Hkim_CV.pdf`. The download buttons already point to this file.
- Links and profile details: update `src/data/portfolioData.js`.
- Project images: replace the assets in `public/projects/` as needed.

## Contact Form

The contact form posts to `/api/contact`, which is implemented as a Vercel Function in `api/contact.js`.

The function sends email with Nodemailer and reads SMTP secrets only from server-side environment variables. No mail credentials are exposed to React.

Required fields:

- `name`
- `email`
- `subject`
- `message`

Validation runs on both the frontend and backend:

- all fields are required
- email must be valid
- max lengths are enforced
- `message` must be at least 12 characters
- a hidden `company` honeypot field helps filter simple bots

## Environment Variables

Create a local `.env` file from `.env.example`:

```bash
cp .env.example .env
```

For Gmail SMTP, use:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=khaoulaelhkim@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO=khaoulaelhkim@gmail.com
CONTACT_FROM=khaoulaelhkim@gmail.com
```

Notes:

- `SMTP_PASS` should be a Gmail App Password, not your normal Gmail password.
- Gmail displays app passwords in groups with spaces. The API strips spaces automatically, so either format works.
- Keep the real `SMTP_PASS` only in your local `.env` file and Vercel Environment Variables. Do not put the real password in `.env.example`.
- In Vercel, add these variables to the Production environment and redeploy after saving them. The correct prefix is `SMTP`, not `STMP`.
- `CONTACT_FROM` is optional in code and falls back to `SMTP_USER`, but it is listed in `.env.example` for clarity.
- `.env` is ignored by Git.

## Local Development

Frontend only:

```bash
npm run dev
```

This starts Vite. The site UI works, but `/api/contact` is not served by plain Vite.

Full local environment:

```bash
npm run dev:vercel
```

This starts Vercel Dev, serves the Vite app, loads the Vercel Function at `/api/contact`, and is the correct local workflow for testing the contact form.

## Deployment

Vercel:

1. Import the repository.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add the environment variables listed above in Vercel Project Settings.
6. Deploy.
7. Test the contact form on the production URL.

After deployment, replace `https://example.com/` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real site URL.
