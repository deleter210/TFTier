import React from 'react';
import AppStatusBanner from './AppStatusBanner';

const DashboardApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">TFTier Dashboard</h1>
        {/* Future: SettingsPanel */}
      </header>

      <AppStatusBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📌 Pinned Comps</h2>
          {/* <PinnedCompsManager /> */}
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📘 Item Cheat Sheet</h2>
          {/* <ItemCheatSheet /> */}
        </div>
      </div>

      <footer className="mt-8 flex justify-between text-sm text-gray-400">
        <div>
          🌍 Language: <span className="font-medium">EN</span>
        </div>
        <div>
          🌓 Theme: <span className="font-medium">Dark</span>
        </div>
      </footer>
    </div>
  );
};

export default DashboardApp;
