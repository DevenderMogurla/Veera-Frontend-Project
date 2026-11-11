# Veera — Fashion Store Demo

A React + Vite responsive fashion storefront with Home, Men, Women, Kids, Register, Login and Create Product pages. A small JSON Server API is included for experimenting with product data.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended current LTS)
- npm (installed with Node.js)
- VS Code (optional)

## 1. Open the correct folder
Extract `Veera.zip`, then open the extracted `Veera` folder in VS Code. The project has two separate folders: `frontend` and `backend`. Run npm commands from the folder that contains the relevant `package.json`.

## 2. Run the frontend
Open a terminal in VS Code and enter:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL Vite prints in the terminal, normally `http://localhost:5173/`. Keep this terminal open while using the app.

## 3. Run the demo API (optional, separate terminal)
Open a second terminal at the `Veera` project root, then enter:

```powershell
cd backend
npm install
npm start
```

JSON Server will normally be available at `http://localhost:3001/products`. The API is provided for learning and is not currently wired into the storefront UI; the registration/login and Create Product forms use browser local storage for demonstration.

## Common errors
- **Missing script: dev** — you are probably in the project root or backend folder. First run `cd frontend`, then `npm run dev`.
- **Could not read package.json / ENOENT** — run `dir` and confirm that `package.json` is listed. If not, `cd frontend` or move to the extracted project folder.
- **Port 5173 is busy** — Vite will offer another port (for example 5174); open the URL shown in the terminal.
- **npm is not recognized** — install Node.js LTS, restart VS Code, and verify with `node -v` and `npm -v`.

## Demo and security notes
This is a learning project. Registration/login details and products created through the form are stored in browser local storage. Do not enter real passwords or personal data. For a real application, use a backend with password hashing, server-side validation, authentication and a database. Product images in the storefront are loaded from Unsplash and need an internet connection.
