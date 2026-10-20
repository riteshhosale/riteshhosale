# Ritesh Bhosale — MERN Portfolio

A personal portfolio built with MongoDB, Express, React, and Node.js. Frontend and backend application code use TypeScript; React components use TSX.

## Structure

- `client/src/components/layout/`: site header and footer
- `client/src/components/sections/`: individual homepage sections
- `client/src/components/projects/`: reusable project cards with live-site and source-code links
- `client/src/pages/`: page composition
- `client/src/data/`: project and skills data, with deployed website URLs
- `client/src/services/`: typed API client
- `client/src/types/`: shared TypeScript types
- `server/src/routes/`: API route definitions
- `server/src/controllers/`: request handlers
- `server/src/models/`: Mongoose models
- `server/src/middleware/`: centralized error handling
- `server/src/app.ts`: Express app setup
- `server/src/server.ts`: database connection and server startup

The homepage lists deployed websites first, before the introduction, skills, education, and contact sections. Cards include a **Visit website** link when a deployed URL is known and a **Source code** link when a repository is available.

Subtle entrance, hover, and floating animations are included, with reduced-motion preferences respected.

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

## API

- `GET /api/health` — API and database status
- `GET /api/projects` — project list including available live URLs
- `GET /api/projects/:slug` — one project
- `POST /api/contact` — validate and save contact messages

## Verification status

The changes are committed to GitHub. Production builds and live portfolio deployment still need verification.
