# Solanova Technologies

The Solanova Technologies website is a responsive company site for presenting software services, selected project work, and a contact form.

## Requirements

- Node.js 20.9 or newer
- npm (included with Node.js)

## Run locally

From the project root, install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the server with `Ctrl+C` in the terminal.

## Available commands

```bash
npm run dev    # Start the local development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve the production build (run build first)
```

## Main routes

- `/` — Homepage with hero, service overview, Why Choose Us, featured projects, and a contact call-to-action.
- `/services` — Detailed descriptions of the four services.
- `/contact` — Contact information and validated contact form.

See [Project documentation](docs/PROJECT_DOCUMENTATION.md) for the site structure, form behavior, assets, and development notes.

## Contact form note

The contact form validates fields in the browser and displays a confirmation message. It is not connected to an email service or backend, so submissions are not delivered.
