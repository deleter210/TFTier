// src/components/Overlay/GoldTracker.tsx

import React, { useState, useEffect } from 'react';
import Analytics from '../../core/Analytics';

const GoldTracker: React.FC = () => {
  const [gold, setGold] = useState<number>(50);

  useEffect(() => {
    const interval = setInterval(() => {
      const rounds = Analytics.getAnalyticsData().rounds;
      if (rounds.length > 0) {
        setGold(rounds[rounds.length - 1].gold);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-2 rounded">
      <h2 className="font-bold">Gold Tracker</h2>
      <p>Current Gold: {gold}</p>
    </div>
  );
};

export default GoldTracker;
