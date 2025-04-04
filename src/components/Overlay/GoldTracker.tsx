import React from 'react';

interface GoldTrackerProps {
  gold: number;
}

const GoldTracker: React.FC<GoldTrackerProps> = ({ gold }) => {
  return (
    <div className="text-yellow-300 text-xl font-bold p-2 bg-gray-800 bg-opacity-50 rounded">
      💰 Gold: {gold}
    </div>
  );
};

export default GoldTracker;
