// src/components/App.tsx

import React from 'react';
import OverlayView from './Overlay/GoldTracker';
import SummaryView from './Summary/SummaryView';

interface AppProps {
  mode: 'overlay' | 'summary';
}

const App: React.FC<AppProps> = ({ mode }) => {
  return (
    <div className="w-full h-full bg-transparent">
      {mode === 'overlay' ? (
        <div className="p-4 space-y-2">
          {/* Drag handle for moving the window */}
          <div className="drag-handle cursor-move bg-gray-800 bg-opacity-50 p-2 rounded">
            <h1 className="text-lg font-bold text-white">TFTier Overlay</h1>
          </div>
          {/* Overlay components */}
          <OverlayView />
          {/* Additional overlay components such as StreakTracker, GoldCurveGraph, etc. can be added here */}
        </div>
      ) : (
        <div>
          {/* Drag handle for summary view */}
          <div className="drag-handle cursor-move bg-gray-800 bg-opacity-50 p-2 rounded">
            <h1 className="text-lg font-bold text-white">TFTier Summary</h1>
          </div>
          <SummaryView />
        </div>
      )}
    </div>
  );
};

export default App;
