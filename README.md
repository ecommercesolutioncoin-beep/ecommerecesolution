# ecommercesolution

A Vite + React + TypeScript + Tailwind starter for an e-commerce solution front-end scaffold.

## Features
- Vite dev/build toolchain
- React 18 with TypeScript
- Tailwind CSS utility styling
- Modular components for common e-commerce landing sections
- Basic ESLint config and type-check script

## Project Structure
```
/ (project root)
  ├─ index.html
  ├─ package.json
  ├─ vite.config.ts
  ├─ tailwind.config.js
  ├─ postcss.config.js
  ├─ tsconfig.json
  ├─ tsconfig.app.json
  ├─ src/
  │  ├─ main.tsx
  │  ├─ App.tsx
  │  ├─ index.css
  │  └─ components/
  │     ├─ Header.tsx
  │     ├─ Hero.tsx
  │     ├─ Services.tsx
  │     ├─ WhyChooseUs.tsx
  │     ├─ Pricing.tsx
  │     ├─ Locations.tsx
  │     ├─ Contact.tsx
  │     ├─ Footer.tsx
  │     └─ WhatsAppButton.tsx
```

## Feature Mapping (Feature → File → Description)
- Header → `src/components/Header.tsx` → Site navigation/header bar
- Hero → `src/components/Hero.tsx` → Landing hero section
- Services → `src/components/Services.tsx` → Service listing section
- Why Choose Us → `src/components/WhyChooseUs.tsx` → Value proposition section
- Pricing → `src/components/Pricing.tsx` → Pricing/plan cards section
- Locations → `src/components/Locations.tsx` → Serviceable locations list
- Contact → `src/components/Contact.tsx` → Contact form/details section
- Footer → `src/components/Footer.tsx` → Footer with links and info
- WhatsApp Button → `src/components/WhatsAppButton.tsx` → Floating action to WhatsApp

## Setup
- Node.js 18+ recommended
- Package manager: npm

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Type check
```bash
npm run typecheck
```

### Lint
```bash
npm run lint
```

### Build
```bash
npm run build
```

## Environment
- Create `.env` in project root for any runtime configuration; do not commit it.
- See `.env.example` if added in the future.

## Current Status
- Front-end scaffold present and working locally with Vite
- No backend or API integration in this repository
- Styling via Tailwind; components are static/presentational

## Security & Notes
- `.gitignore` excludes `node_modules/`, `dist/`, and local env files
- Do not commit secrets; use environment variables

## Contributing
- Create a feature branch off `main`
- Run typecheck and lint before committing
- Submit a PR for review
