# Ritesh Bhosale — MERN Portfolio

A personal portfolio built with MongoDB, Express, React, and Node.js. The React frontend uses TypeScript and TSX with strict type checking.

## Structure
- `client/`: React + Vite frontend; React components use `.tsx`, Vite configuration uses `.ts`
- `server/`: Express REST API, MongoDB/Mongoose models, contact endpoint

## Run locally
1. Install Node.js 20+ and MongoDB (local or Atlas).
2. In `server/`, copy `.env.example` to `.env`, then set `MONGODB_URI` and `CLIENT_ORIGIN`.
3. Run `npm install` and `npm run dev` in `server/`.
4. In another terminal, go to `client/`, run `npm install`, then `npm run dev`.
5. Open the Vite URL printed in the terminal (usually `http://localhost:5173`).

## Frontend production build
From `client/`, run:

```bash
npm run build
```

This runs the TypeScript check and then creates the Vite production build.

## Contact API
The contact form submits to `POST /api/contact`. Project cards are loaded from `GET /api/projects`, with bundled fallback project data available if the API is offline.

Configure the backend environment using `server/.env.example` before testing contact submissions. The project has not yet been verified with a production build or deployed.
