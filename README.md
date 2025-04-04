# TFTier – Overwolf Companion App for Teamfight Tactics

TFTier is a feature-rich Overwolf desktop app that enhances your Teamfight Tactics experience with real-time overlays, match summaries, pinned team comps, and data visualizations powered by Riot's API and Data Dragon.

---

## 🚀 Features

- 🎯 **Real-Time Overlay** – Displays gold, win streaks, and live match data.
- 📊 **Post-Game Summary** – Final placement, gold chart, round details.
- 📚 **Cheat Sheet** – In-game item combination and champion info.
- 📌 **Pinned Comps** – Save and reference team compositions.
- 🌐 **i18n Support** – English localization, structured for more languages.
- ⚙️ **Overwolf Compliant** – Manifest includes multi-window config.
- 📈 **D3.js Graphs** – Gold curve and performance visualizations.
- 🔐 **Environment Secure** – API keys are managed through `.env`.

---

## 🧱 Tech Stack

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [D3.js](https://d3js.org/)
- [Vite](https://vitejs.dev/) (multi-entry)
- [Overwolf SDK](https://overwolf.github.io/) (via manifest)

---

## 📦 Installation (Dev)

1. Clone the repository:
```bash
git clone https://github.com/deleter210/TFTier.git
cd TFTier
```

2. Install dependencies:
```bash
npm install
```

3. Create your `.env`:
```bash
cp .env.example .env
# Fill in your Riot API key and Overwolf App ID
```

4. Run the dev server:
```bash
npm run dev
```

5. Open Overwolf Developer Console:
   - Load the app as an unpacked extension.
   - Use `http://localhost:5173/overlay.html` for overlay window, etc.

---

## 🛠️ Production Build

```bash
npm run build
```
Output goes to `dist/`:
```
dist/
├── overlay.html
├── summary.html
├── background.html
├── assets/
├── manifest.json
```

This can be zipped and submitted to the Overwolf App Store.

---

## 📁 Folder Structure

```
TFTier/
├── public/              # HTML files, manifest, icons
├── src/
│   ├── components/      # React UI components (Overlay, Summary)
│   ├── services/        # Riot API, game event logic, storage
│   ├── windows/         # Vite entry scripts (overlay.tsx, summary.tsx, background.ts)
├── .env.example         # Example config
├── vite.config.ts       # Vite multi-entry config
├── tailwind.config.js
```

---

## 🔒 Environment Variables

`.env.example`:
```bash
VITE_RIOT_API_KEY=your-riot-api-key
OVERWOLF_APP_ID=com.tftier.app
```

---

## 📃 License

MIT

---

For issues, suggestions, or contributions, open a [GitHub Issue](https://github.com/deleter210/TFTier/issues).

