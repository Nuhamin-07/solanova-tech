# Project Documentation

## Overview

Solanova Technologies is a responsive company website for introducing the business, explaining its software services, showing selected project examples, and collecting contact inquiries.

## Technology

- **Next.js 16 App Router** — routing, layouts, and page rendering.
- **React 19** — UI components and client-side form interaction.
- **TypeScript** — typed application and data files.
- **Tailwind CSS 4** — responsive styling.
- **React Hook Form** — contact form state and browser-side validation.
- **Next Image** — rendering and optimizing local image assets.

The contact form uses local shadcn-style form primitives in `components/ui/form.tsx`. Validation uses React Hook Form rules directly; there is no Zod schema.

## Routes and page content

| Route | Purpose |
| --- | --- |
| `/` | Homepage with the hero, service preview, Why Choose Us section, featured project cards, and a contact call-to-action. |
| `/services` | Full descriptions and capability lists for Custom Software Development, SaaS Platform Development, Mobile App Development, and Web Application Development. |
| `/contact` | Contact information and the validated contact form. |

The global layout provides the navigation and footer on every route. The navigation has a responsive mobile dropdown.

## Contact form behavior

The contact form requires a name, email, subject, and message. React Hook Form validates required values, checks the email format, rejects blank-only names and subjects, and requires a message of at least 20 non-whitespace characters. Errors appear next to their fields.

After valid submission, the form displays a confirmation and resets its fields. **No email service or backend is configured**, so the form currently does not deliver submissions. Connect a form API or server-side action before relying on it to receive inquiries.

## Featured project imagery

Project content is stored in `data/projects.ts`; each project card currently uses one PNG from `public/projects/`. The dashboard images are illustrative generated interface concepts, not screenshots of live production systems. The card labels identify them as illustrative.

Service, project, and Why Choose Us content is kept in the `data/` directory and imported into the UI components.

## Repository structure

```text
app/
  contact/page.tsx       Contact route
  services/page.tsx      Full services route
  page.tsx               Homepage
  layout.tsx             Shared navigation, footer, fonts, and metadata
  globals.css            Tailwind import and global styles

components/
  ContactCta.tsx         Homepage contact call-to-action
  ContactSection.tsx     Contact content and validated form
  Footer.tsx             Shared footer
  Hero.tsx               Homepage hero
  Navbar.tsx             Responsive shared navigation
  Portfolio.tsx          Featured project cards
  ServiceCard.tsx        Reusable service preview card
  Services.tsx           Homepage services overview
  WhyUs.tsx              Why Choose Us section
  ui/form.tsx            React Hook Form based form primitives

data/
  projects.ts            Project details and image paths
  services.ts            Service type and service content
  why-us.ts              Why Choose Us type and content

public/
  projects/              Featured project dashboard PNGs
  services/              Service illustrations
  hero.jpg               Homepage hero image
  solanova-logo.png      Brand logo

docs/
  PROJECT_DOCUMENTATION.md
```

## Local development

### Prerequisites

- Node.js 20.9 or newer.
- npm.

### Install and run

From the repository root:

```bash
npm ci
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). If port 3000 is already occupied, use the local URL printed by Next.js in the terminal. Stop the dev server with `Ctrl+C`.

### Project scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server. |
| `npm run lint` | Runs ESLint over the project. |
| `npm run build` | Creates a production build. |
| `npm run start` | Runs the production server; run `npm run build` first. |

There is no `.env` configuration required for the current site. The contact form does not have a delivery provider configured.

## Editing content

- Update service titles and details in `data/services.ts`.
- Update project descriptions and featured images in `data/projects.ts`.
- Update Why Choose Us copy in `data/why-us.ts`.
- Keep image paths rooted at `/public` paths, for example `/projects/erp-inventory-dashboard.png`.
- The homepage service overview links to `/services`; keep the detailed offering content on that route.

## Production build

Create and run a local production build with:

```bash
npm run build
npm run start
```
