import React from 'react';
import Card from '../../Common/Card';

interface StreakTrackerProps {
  streak: number;
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ streak }) => {
  const isWin = streak >= 0;
  return (
    <Card title="Current Streak">
      <div
        className={`text-2xl font-bold text-center p-4 rounded text-white shadow-overlay ${
          isWin ? 'bg-green-700' : 'bg-red-700'
        }`}
      >
        {isWin ? '🔥 Win Streak: ' : '💀 Loss Streak: '}
        {Math.abs(streak)}
      </div>
    </Card>
  );
};

export default StreakTracker;
