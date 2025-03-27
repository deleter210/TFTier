import React, { useState, useEffect } from 'react';

const StreakTracker: React.FC = () => {
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    // Subscribe to real GEO events to update streaks.
    const interval = setInterval(() => {
      // Replace with actual event-based logic
      setStreak((prev) => (Math.random() > 0.5 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-2 rounded mt-2">
      <h2 className="font-bold">Streak Tracker</h2>
      <p>Current Streak: {streak}</p>
    </div>
  );
};

export default StreakTracker;
