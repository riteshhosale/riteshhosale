# Ritesh Bhosale — MERN Portfolio

A personal portfolio built with MongoDB, Express, React, and Node.js. Frontend and backend code use TypeScript; React components use TSX.

## Project structure

```text
portfolio-mern/
├── client/
│   ├── index.html
│   ├── vite.config.ts
│   └── src/
│       ├── components/
│       │   ├── layout/       # Site header and footer
│       │   ├── projects/     # Reusable project cards
│       │   └── sections/     # Hero, About, Skills, Education, Contact, etc.
│       ├── data/             # Local project and skill data
│       ├── pages/            # Page-level compositions
│       ├── services/         # Typed API client
│       ├── types/            # Shared TypeScript types
│       ├── App.tsx
│       ├── main.tsx
│       └── styles.css
└── server/
    └── src/
        ├── controllers/      # Request handlers/business logic
        ├── data/             # Typed project data
        ├── middleware/       # Shared Express middleware
        ├── models/           # Mongoose models
        ├── routes/           # API route definitions
        ├── app.ts            # Express middleware and route mounting
        └── server.ts         # Database connection and server startup
```

## Run locally

1. Install Node.js 20+ and MongoDB (local or Atlas).
2. In `server/`, copy `.env.example` to `.env`, then set `MONGODB_URI` and `CLIENT_ORIGIN`.
3. In `server/`, run `npm install` then `npm run dev`.
4. In a second terminal, go to `client/`, run `npm install` then `npm run dev`.
5. Open the Vite URL printed in the terminal (usually `http://localhost:5173`).

## Build

Run in `server/`:
```bash
npm run build
npm start
```

Run in `client/`:
```bash
npm run build
npm run preview
```

## API routes

- `GET /api/health` — API and database status
- `GET /api/projects` — list projects
- `GET /api/projects/:slug` — get one project
- `POST /api/contact` — validate and save a contact message

The contact endpoint requires MongoDB to be connected. Configure `server/.env.example` before testing it.

## Verification status

Code organization has been updated in GitHub. A production build and live deployment have not yet been verified.
