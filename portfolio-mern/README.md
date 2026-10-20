# Ritesh Bhosale — MERN Portfolio

A personal portfolio built with MongoDB, Express, React, and Node.js. The frontend and backend application code use TypeScript; React components use TSX.

## Structure
- `client/`: React + Vite frontend (`.tsx` components, `.ts` Vite config)
- `server/`: Express REST API, typed Mongoose model, and project data (`.ts` files)

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

The frontend build runs a strict TypeScript check before Vite builds the production assets.

## API
- `GET /api/health` — API and database connection status
- `GET /api/projects` — portfolio project list
- `GET /api/projects/:slug` — one project by slug
- `POST /api/contact` — validate and save a contact message

The contact endpoint requires MongoDB to be connected. Configure the backend environment using `server/.env.example` before testing it.

## Deployment status
The code has been committed to GitHub. A local production build and live deployment have not yet been verified.
