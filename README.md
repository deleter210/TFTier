# TFTier – Companion App for Teamfight Tactics

TFTier is a production-ready Overwolf companion app designed to elevate your Teamfight Tactics gameplay with real-time overlays, analytics, and tracking.

Built with **React**, **Vite**, **Tailwind CSS**, and **Overwolf's GEP**, it delivers an optimized experience for competitive players.

---

## 🚀 Features

- **💰 Real-time Gold Tracker**
- **🔥 Streak Tracker** with Win/Loss detection
- **📈 Gold Curve Graph** (via D3.js)
- **🧠 Item Cheat Sheet** from Riot's Data Dragon
- **📌 Pinned Team Comps** saved using Overwolf storage
- **🪟 Multi-Window Layout**: Overlay, Summary, Background
- **🔒 Environment-safe Riot API integration**
- **🌍 i18n support** (English, extensible)

---

## 🛠️ Development Setup

```bash
npm install
npm run dev
```

- Dev server: http://localhost:5173/
- Overlay: `http://localhost:5173/overlay.html`
- Summary: `http://localhost:5173/summary.html`

> Overwolf manifest auto-points to local dev URLs during development.

---

## 📦 Build for Production

```bash
npm run build
```

- Output: `/dist`
- Load the `dist` folder as an unpacked Overwolf app for testing

---

## 📁 Project Structure

```bash
TFTier/
├── public/
│   ├── icons/              # Required icons (see Overwolf docs)
│   └── manifest.json       # Overwolf manifest
├── src/
│   ├── components/         # Overlay UI components
│   ├── services/           # Riot API, GEP, cache, i18n
│   ├── windows/            # Entry scripts & HTML
│   └── styles.css          # Tailwind base
├── vite.config.ts          # Vite multi-page config
└── tsconfig.json           # TypeScript config
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and add:

```env
VITE_RIOT_API_KEY=RGAPI_XXXXXXXXXXXX
OVERWOLF_APP_ID=com.tftier.app
```

> Never commit `.env` to source control.

---

## 🎮 Target Game

- **Teamfight Tactics** (Game ID: `5426`)
- Uses Overwolf Game Events Provider for real-time tracking

---

## 📚 Resources

- [Overwolf Developer Docs](https://overwolf.github.io/docs)
- [Riot Developer Portal](https://developer.riotgames.com)
- [Data Dragon](https://ddragon.leagueoflegends.com/)

---

## 🧪 Status

This version is production-ready and tagged as:

```
v1.0.0
```

You may submit it to the Overwolf App Store or load it as an unpacked extension for testing.

