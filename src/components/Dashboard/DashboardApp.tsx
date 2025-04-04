import React, { useEffect } from 'react';

const DashboardApp: React.FC = () => {
  useEffect(() => {
    console.log("✅ DashboardApp loaded successfully.");
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="border border-gray-700 rounded-lg p-6 shadow-xl bg-gray-900">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">TFTier Dashboard</h1>
        <p className="text-lg mb-2">🎯 Welcome to your TFTier control panel!</p>
        <p className="text-sm text-gray-400">(This screen is visible when the game is not running)</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">Manage Pinned Comps</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Past Matches</button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Customize Overlay</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardApp;
