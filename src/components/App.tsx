import React from 'react';
import OverlayView from './Overlay/GoldTracker'; // For demonstration, you may combine overlay modules in a layout.
import SummaryView from './Summary/SummaryView';

interface AppProps {
  mode: 'overlay' | 'summary';
}

const App: React.FC<AppProps> = ({ mode }) => {
  return (
    <div className="w-full h-full bg-transparent">
      {mode === 'overlay' ? (
        <div className="p-4 space-y-2">
          <h1 className="text-lg font-bold text-white">TFTier Overlay</h1>
          {/* Combine multiple overlay components */}
          <OverlayView />
          {/* You can add StreakTracker, GoldCurveGraph, etc. */}
        </div>
      ) : (
        <SummaryView />
      )}
    </div>
  );
};

export default App;
