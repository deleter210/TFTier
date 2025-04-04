import React from 'react';

const ConfigApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">TFTier: Pre-Game Planner</h1>
      <p className="text-gray-300">TFT is not currently running. You can still manage your pinned comps, customize settings, and prepare for your next match.</p>
      <div className="border border-gray-600 rounded p-4 bg-gray-800">
        <p className="text-sm text-gray-400">[Placeholder for: Pinned Comps Manager]</p>
      </div>
      <div className="border border-gray-600 rounded p-4 bg-gray-800">
        <p className="text-sm text-gray-400">[Placeholder for: Cheat Sheet]</p>
      </div>
      <div className="border border-gray-600 rounded p-4 bg-gray-800">
        <p className="text-sm text-gray-400">[Placeholder for: Settings Panel]</p>
      </div>
    </div>
  );
};

export default ConfigApp;
