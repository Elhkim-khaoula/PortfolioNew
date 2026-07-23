# Portfolio de Khaoula El Hkim

Portfolio one-page moderne en React, Vite, JavaScript, Tailwind CSS, Framer Motion et React Icons.

## Installation

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
```

## Structure

```text
public/
  Khaoula_El_Hkim_CV.pdf
  favicon.svg
  robots.txt
  sitemap.xml
src/
  assets/
    profile.jpg
  components/
    MobileMenu.jsx
    Navbar.jsx
    ProjectCard.jsx
    ScrollToTop.jsx
    SectionTitle.jsx
    SocialLinks.jsx
  data/
    portfolioData.js
  sections/
    About.jsx
    Contact.jsx
    FAQ.jsx
    Footer.jsx
    Hero.jsx
    Projects.jsx
    Services.jsx
    Skills.jsx
    TechStack.jsx
    Timeline.jsx
    Volunteering.jsx
    WorkProcess.jsx
  App.jsx
  index.css
  main.jsx
tailwind.config.js
vite.config.js
```

## Personnalisation

- Photo de profil : remplacez `src/assets/profile.jpg` par la vraie photo, en gardant le même nom ou en mettant à jour les imports dans `Hero.jsx` et `About.jsx`.
- CV : placez le PDF final dans `public/Khaoula_El_Hkim_CV.pdf`. Les boutons de téléchargement pointent déjà vers ce fichier.
- Liens : mettez à jour `src/data/portfolioData.js` pour remplacer le lien LinkedIn `#` et les URLs `github` / `demo` des projets.
- Images de projets : les cartes utilisent des visuels placeholder commentés dans `ProjectCard.jsx`. Remplacez-les par de vraies captures quand elles sont disponibles.

## Formulaire de contact

Le formulaire envoie les messages à `khaoulaelhkim@gmail.com` via un petit serveur Node/Nodemailer.

1. Créez ou mettez à jour `.env` à partir de `.env.example`.
2. Ajoutez un mot de passe d’application Gmail dans `GMAIL_APP_PASSWORD`.
3. Lancez le site avec `npm run dev`.

Important : ne mettez jamais le mot de passe Gmail dans le code React. `.env` est ignoré par Git.

## Déploiement

Vercel :

1. Importer le dépôt.
2. Framework : Vite.
3. Build command : `npm run build`.
4. Output directory : `dist`.

Netlify :

1. Importer le dépôt.
2. Build command : `npm run build`.
3. Publish directory : `dist`.

Après déploiement, remplacez `https://example.com/` dans `index.html`, `public/robots.txt` et `public/sitemap.xml` par l’URL réelle du site.
