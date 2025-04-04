# TFTier – Overwolf Companion App for Teamfight Tactics

TFTier is a production-ready desktop overlay app built using the Overwolf SDK, React, TypeScript, Vite, and Tailwind CSS. It provides in-game real-time insights and post-game analysis for **Teamfight Tactics** (Game ID: `5426`), leveraging Riot's API and Overwolf's Game Event Provider (GEP).

---

## 🚀 Features

- ⚔️ **Overlay UI**: Displays real-time gold, streak, and a gold curve graph.
- 📊 **Summary View**: Post-game breakdown using Overwolf GEP or Riot API.
- 📘 **Cheat Sheet**: Real-time item data fetched from Riot’s Data Dragon.
- 📌 **Pinned Comps**: Save and view your favorite team comps per session.
- 🌐 **Internationalization**: i18n support (English enabled; easy to expand).
- 💾 **Local Storage**: Uses Overwolf's secure `overwolf.settings` for persistence.
- 🧠 **Smart Game Events**: Tracks win/loss streaks, gold changes, match end triggers.
- 🎨 **Dark TFT-inspired UI**: Modern UI using Tailwind + Headless UI + D3.

---

## 🧑‍💻 Development

### 1. Clone the Repository

```bash
git clone https://github.com/deleter210/TFTier.git
cd TFTier
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Set your Riot API key:

```
VITE_RIOT_API_KEY=RGAPI_YOUR_KEY_HERE
```

---

## 🔧 Run in Development

Use the Vite dev server:

```bash
npm run dev
```

Then load the app via **Overwolf Developer Console**:
- Load unpacked app from this project
- Use the local dev URLs for `debug_url` in `manifest.json`

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in `/dist/` folder. Load this via Overwolf’s Developer Console as the unpacked app for final testing or create a `.zip` for submission.

---

## 📁 Folder Structure

```
TFTier/
├── public/            # manifest.json, HTML entry points
├── src/
│   ├── components/    # React components (Overlay, Summary, etc.)
│   ├── services/      # Riot API, GEP, storage logic
│   ├── windows/       # Overlay, Summary, Background TS entry points
│   └── vite-env.d.ts  # import.meta.env typing
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── .env.example
```

---

## 📦 Deployment

- **Build** the project
- **Zip** the `dist/` folder
- Submit to Overwolf App Store (after validating manifest and resources)

---

## 🛠️ Tech Stack

- [Overwolf SDK](https://overwolf.github.io)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [D3.js](https://d3js.org/)
- [Headless UI](https://headlessui.com/)
- [Riot API](https://developer.riotgames.com/)

---

## ⚠️ License & Keys

This project uses **Riot's public API**. You must not commit your API key. Do **not publish** the `.env` file.

---

## 🧠 Notes

- Tested with Overwolf client v0.169.0+
- Game target: Teamfight Tactics (ID: 5426)
- Windows: `background`, `overlay`, `summary`, `auth` (optional)

---

## ✅ Status

🟢 Fully functional – currently in production testing phase.
