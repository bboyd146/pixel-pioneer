# PixelPioneer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Commits](https://img.shields.io/github/last-commit/bboyd146/pixel-pioneer?style=for-the-badge&color=informational)

**Elevate Your Digital Presence with Professional Web Solutions**

[🌐 Live Site →](https://pixel-pioneer.onrender.com)

---

## ✅ What We Offer
PixelPioneer is a web-design and development services site tailored for businesses and personal brands. The goal: create stunning, mobile-responsive websites that convert visitors into customers, while offering clear pricing tiers and efficient workflows.

### Key Service Tiers
- **Basic Static Page** – Simple, clean layout; perfect for startups or personal brands.  
- **Professional Business Page** – Multi-section, fully responsive, contact form & SEO ready.  
- **Premium Conversion Page** – Advanced animations, CRM/API integrations, booking/payment features for high-performance conversion goals.

---

## 🧩 Project Architecture
This site is built with:
- **Framework:** React with Vite (fast build & HMR)  
- **Styling:** Tailwind CSS (with custom theme overrides)  
- **Icons:** Feather Icons (via `data-feather` attributes)  
- **Hosting:** Render (or similar static hosting)  
- **Form Integration:** Google Forms → Google Sheets → Zapier → Slack notifications for leads

---

## 🛠️ Getting Started (Development)

### Prerequisites
- Node.js (v16+ recommended)  
- npm (or yarn)  
- Git

### Install & Run Locally
```bash
git clone https://github.com/bboyd146/pixel-pioneer.git
cd pixel-pioneer
npm install
npm run dev
```
Open http://localhost:5173 (or the port Vite reports) to view the site locally.

### Build for Production
```bash
npm run build
```

The compiled output will be in the dist/ folder (or your configured build directory). Deploy that folder to your hosting provider.

## 📋 Components Overview

### Project structure (key files & folders):
```markdown
/src
  /components
    Nav.jsx
    Hero.jsx
    Services.jsx
    Pricing.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
tailwind.config.js
```

- components/ — reusable UI pieces

- App.jsx — root layout mounting sections

- main.jsx — React entry point

- index.css — Tailwind imports + custom CSS

## ✅ Deployment
Run:
```bash
 npm run build
```
- Deploy the dist/ folder to your hosting platform (Render, Netlify, Vercel, etc.)

- Confirm static assets are served with correct MIME types (text/css for CSS).

- Optionally add a CDN & caching strategy for performance.

### Render quick checklist:
```bash
Build Command: npm run build
```
- Publish Directory: dist

## 📩 Lead Capture & Workflow

Contact form in the site submits to a Google Form endpoint (or posts to a Google Apps Script / Zapier webhook depending on your setup).

Responses are recorded into a Google Sheet.

A Zapier automation watches the sheet and sends lead details to Slack and/or email for follow-up.

This setup ensures reliable lead capture without hosting a backend.

## 🔒 Security & Environment Variables

Safe to embed in frontend: Google Form ID and entry.xxxxx field IDs are public and can live in the client.

Do not expose: Zapier webhook URLs, Slack tokens, API keys, or sensitive secrets in frontend code. Store those in environment variables or use a backend.

Example: if using a Zapier webhook directly, keep the URL in .env and never commit it.

## ✅ Accessibility & Performance Tips

Ensure semantic HTML (table headers, labels) for screen readers.

Add aria attributes to interactive elements if you add custom JS behaviors.

Optimize images (use next-gen formats or compressed assets) and enable caching for static assets.

## 📸 Screenshots

<em> Hero Section</em>
<img width="1564" height="670" alt="Screenshot 2025-10-20 at 2 46 00 PM" src="https://github.com/user-attachments/assets/03127a74-a423-46b9-8554-04196f329729" />
<em> Pricing Table</em>
<img width="1547" height="813" alt="Screenshot 2025-10-20 at 2 45 38 PM" src="https://github.com/user-attachments/assets/84fc38f2-203e-4b68-9808-18484faad03a" />

## 🧑‍💼 About

Brad Boyd  — Web Developer & Digital Specialist

LinkedIn: [Bradley Boyd](https://www.linkedin.com/in/bradleydboyd/)

## 📄 License & Terms

This repository's code is available for your internal use and customization. Client project terms (pricing, deliverables, timelines) should be defined per engagement in a separate contract or proposal.

## 🙌 Next steps & enhancements (ideas)

Add a dark/light mode toggle with class switching on <html>.

Convert Feather icons to inline React SVG components for better control.

Implement server-side lead validation with a Google Apps Script or small server to accept form submissions (improves reliability & allows success responses).

Add analytics and UTM capture (hidden fields) for lead source tracking.

Wire up a simple admin dashboard (Airtable / Notion / Google Sheets + UI) to manage leads.

Thanks for building PixelPioneer — if you’d like, I can:

Add ready-to-paste badges (build status, license, deployed URL),

Auto-generate screenshots to include in this README, or

Draft a short client-facing "service terms" template to attach to proposals.
