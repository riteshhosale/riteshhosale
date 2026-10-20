# Ritesh Bhosale — MERN Portfolio

A personal portfolio built with MongoDB, Express, React, and Node.js.

## Structure
- `client/`: React + Vite frontend
- `server/`: Express REST API, MongoDB/Mongoose models, contact endpoint

## Run locally
1. Install Node.js 20+ and MongoDB (local or Atlas).
2. In `server/`, copy `.env.example` to `.env`, set `MONGODB_URI` and `CLIENT_ORIGIN`.
3. Run `npm install` and `npm run dev` in `server/`.
4. In another terminal, run `npm install` and `npm run dev` in `client/`.
5. Vite runs on port 5173 and proxies `/api` to Express at port 5000.

The frontend can still show portfolio projects if the API is offline; contact submissions require the API and MongoDB.
