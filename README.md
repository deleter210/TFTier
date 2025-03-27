Here's a comprehensive and professional **`README.md`** tailored specifically for the **TFTier v0.0.2** project:

---

# 🛡️ **TFTier - Teamfight Tactics Companion App**
### **Version: 0.0.2**

**An Overwolf-powered companion app providing live game analytics, overlays, and detailed post-game summaries for Teamfight Tactics (TFT).**

---

## 📖 **Table of Contents**

- [🚀 Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🛠 Installation & Development Setup](#-installation--development-setup)
- [⚙️ Tech Stack](#️-tech-stack)
- [🎯 Usage & Windows](#-usage--windows)
- [📝 Changelog (v0.0.2)](#-changelog-v002)
- [🐛 Troubleshooting & Known Issues](#-troubleshooting--known-issues)
- [🚧 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📚 Resources](#-resources)
- [📜 License](#-license)

---

## 🚀 **Features**

### Implemented:
- **Real-time Overlay:**
  - Gold tracker & economic analytics.
  - Win-streak monitor.
  - Unit and item usage display.

- **In-depth Post-game Analytics:**
  - Detailed round-by-round summaries.
  - Interactive analytics charts and tables.

- **Data Persistence:**
  - Game data storage locally via Overwolf's IO APIs.
  - Structured analytics processing.

### Upcoming:
- Riot OAuth authentication.
- Cloud-based analytics sync (Google Drive).
- Enhanced recommendations and insights.

---

## 📂 **Project Structure**
```bash
TFTier/
├── dist/ # Build output
├── node_modules/ # Dependencies
├── src/
│   ├── assets/
│   │   ├── champions/
│   │   ├── icons/
│   │   └── items/
│   ├── components/
│   │   ├── Common/
│   │   ├── Overlay/
│   │   └── Summary/
│   ├── constants/
│   ├── core/
│   ├── styles/
│   ├── types/
│   ├── background.ts
│   ├── main-overlay.tsx
│   └── main-summary.tsx
├── manifest.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠 **Installation & Development Setup**

### Prerequisites:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Overwolf Developer Tools](https://overwolf.github.io/)
- Git

### Setup:
```bash
git clone <repository_url>
cd TFTier
npm install
```

### Development:
- Start Vite dev server:
```bash
npm run dev
```

- **Load Unpacked Extension in Overwolf**:
  1. Open **Overwolf Settings** → **Development options**.
  2. Click **"Load unpacked extension"** and select the `TFTier/dist` folder.

---

## ⚙️ **Tech Stack**

- **Platform**: Overwolf SDK
- **Frontend**: React (TypeScript), Tailwind CSS
- **Build Tooling**: Vite
- **API Integrations**:
  - Riot Games (Teamfight Tactics)
  - Google Drive (planned for future release)

---

## 🎯 **Usage & Windows**

- **Overlay Window** (`overlay.html`):
  - Activated during gameplay, transparent overlay.

- **Summary Window** (`summary.html`):
  - Displays post-match analytics, charts, and summaries.

- **Background Service** (`background.html`):
  - Continuously listens to game events.

- **Auth Window** (`auth.html`):
  - (Upcoming) Handles user login and API token storage.

---

## 📝 **Changelog (v0.0.2)**

### ✅ **New Features:**
- Real-time analytics with Overwolf GEO integration.
- Gold, streak, and unit/item tracking in overlay.
- Detailed game summary tables and charts post-game.

### 🐛 **Bug Fixes & Enhancements:**
- Fixed type declaration conflicts (`overwolf.d.ts` issues).
- Resolved manifest validation errors (JSON schema compliance).
- Improved file I/O management (`RiotSync.ts` improvements).

---

## 🐛 **Troubleshooting & Known Issues**

### Common Issues:
- **Manifest JSON Errors**: 
  - Ensure paths in `manifest.json` are relative to the extension root.
- **TypeScript Errors**: 
  - Ensure Overwolf type definitions (`overwolf.d.ts`) are correctly referenced and not modified.
- **Overlay Visibility Issues**:
  - Verify `manifest.json` contains proper `game_targeting` settings (`game_ids`: `[5426]` for TFT).

---

## 🚧 **Roadmap**

### Version 0.0.3 Goals:
- Implement OAuth Riot authentication.
- Enable Google Drive synchronization.
- Expand analytics (Augments, Traits, Advanced metrics).
- Add advanced UI customization settings.
- Introduce community sharing and insights.

### Future Plans:
- AI-driven suggestions and in-game strategic recommendations.
- Mobile app integration for analytics tracking.

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository and create a feature branch.
2. Implement your changes with detailed commit messages.
3. Ensure proper linting and testing (`npm run build`).
4. Submit a pull request clearly describing your feature or fix.

---

## 📚 **Resources**

- [Overwolf SDK Documentation](https://overwolf.github.io/)
- [Riot Games API Documentation](https://developer.riotgames.com/)
- [Teamfight Tactics Wiki](https://leagueoflegends.fandom.com/wiki/Teamfight_Tactics)

---

## 📜 **License**

Licensed under MIT License. See [LICENSE](LICENSE) for full details.

---

**Made with ❤️ by TFTier Dev Team**  
**Happy Gaming! 🛡️**