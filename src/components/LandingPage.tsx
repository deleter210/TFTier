// src/components/LandingPage.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white p-4">
      {/* Header / Logo Area */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to TFTier</h1>
        <p className="text-lg mt-2">Your ultimate companion for Teamfight Tactics</p>
      </header>
      {/* Feature Highlights */}
      <div className="w-full max-w-xl">
        <div className="bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Live Analytics & Post-Game Insights</h2>
          <ul className="list-disc ml-5 text-left">
            <li>Real-time overlay with gold, streak, and unit/item tracking</li>
            <li>Detailed round-by-round post-game summaries and interactive charts</li>
            <li>Customizable UI to suit your gaming style</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              onClick={() => {
                // Navigation logic: switch to overlay view, for example.
                console.log("Get Started clicked!");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-400">
        <p>© 2025 TFTier Dev Team</p>
      </footer>
    </div>
  );
};

export default LandingPage;
