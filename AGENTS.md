# AGENTS — Codebase guidance for AI coding agents

Purpose: Give concise, actionable instructions so an AI coding agent can be immediately productive working on this repo.

- **Run:** : Install dependencies and start the server:
  - `npm install`
  - `npm start` (runs `node server.js`)
  - `npm run dev` (runs `nodemon server.js` if you have `nodemon`)

- **Environment:** : The app reads credentials from environment variables. See [README.md](README.md) for the required variables (`MERCADOPAGO_ACCESS_TOKEN`, `WEBPAY_COMMERCE_CODE`, `WEBPAY_API_KEY`, `APP_BASE_URL`). If a `.env.example` file is present, copy it to `.env` and fill values.

- **Key files:** :
  - `server.js` — backend API and static file server ([server.js](server.js)).
  - `index.html`, `script.js`, `styles.css` — frontend static site ([index.html](index.html)).
  - `package.json` — scripts and dependencies ([package.json](package.json)).
  - `README.md` — project overview and setup notes ([README.md](README.md)).

- **Important notes for edits:** :
  - Do not add secrets or credentials to commits. Follow `.gitignore`.
  - Payment integrations are live APIs (Mercado Pago / Webpay). When adding tests or CI, use mocks and avoid hitting production endpoints.
  - Uploads are saved to a local `uploads/` folder; be mindful when running tests that create files.

- **When running tests or making changes:** :
  - Prefer small, focused changes. Run the server locally and test the frontend flow at `http://localhost:3000`.

If you'd like, I can also add a `.github/copilot-instructions.md` with stricter agent rules (scopes, restricted commands, automated checks). What would you prefer next?
