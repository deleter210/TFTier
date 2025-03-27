// src/components/LandingPage.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      {/* Header / Logo Area */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">TFTier</h1>
        <p className="text-xl mt-4">Your Ultimate Companion for Teamfight Tactics</p>
      </header>
      {/* Feature Highlights */}
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">Live Analytics & Post-Game Insights</h2>
        <ul className="list-disc ml-8 space-y-2 text-lg">
          <li>Real-time overlay tracking gold, win streaks, and unit/item usage</li>
          <li>Detailed round-by-round summaries and interactive charts</li>
          <li>Customizable and modern UI built for TFT players</li>
        </ul>
        <div className="mt-10 flex justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
            onClick={() => {
              // Replace this with your navigation logic to move from landing to overlay
              console.log("Get Started clicked!");
              // For example, you might change the window mode or trigger a navigation event.
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-400">
        <p>© 2025 TFTier Dev Team. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
