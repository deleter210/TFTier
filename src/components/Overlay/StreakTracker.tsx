import React from 'react';

interface StreakTrackerProps {
  streak: number;
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ streak }) => {
  const isPositive = streak >= 0;
  const streakText = isPositive ? `Win Streak: ${streak}` : `Loss Streak: ${Math.abs(streak)}`;
  return (
    <div className={`text-xl font-bold p-2 rounded bg-opacity-50 ${isPositive ? 'text-green-300 bg-green-900' : 'text-red-300 bg-red-900'}`}>
      {isPositive ? '🔥' : '💀'} {streakText}
    </div>
  );
};

export default StreakTracker;
