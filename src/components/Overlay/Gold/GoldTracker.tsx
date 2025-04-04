import React from 'react';
import Card from '../../Common/Card';

interface GoldTrackerProps {
  gold: number;
}

const GoldTracker: React.FC<GoldTrackerProps> = ({ gold }) => {
  return (
    <Card title="Current Gold">
      <div className="text-gold text-3xl font-bold text-center">
        💰 {gold}g
      </div>
    </Card>
  );
};

export default GoldTracker;
