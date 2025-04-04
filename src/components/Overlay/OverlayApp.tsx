import React, { useEffect, useState } from 'react';
import GoldTracker from './GoldTracker';
import StreakTracker from './StreakTracker';
import GoldCurveGraph from './GoldCurveGraph';

const OverlayApp: React.FC = () => {
  const [gold, setGold] = useState(0);
  const [streak, setStreak] = useState(0);
  const [goldHistory, setGoldHistory] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      overwolf.games.events.getInfo(info => {
        if (info?.res?.me?.gold !== undefined) {
          const currentGold = parseInt(info.res.me.gold, 10);
          setGold(currentGold);
          setGoldHistory(prev => {
            const newHist = [...prev, currentGold];
            if (newHist.length > 50) newHist.shift();
            return newHist;
          });
        }
        // Add logic here for streak detection if needed
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overlay-ui fixed inset-0 pointer-events-none">
      <div className="absolute top-2 left-2">
        <GoldTracker gold={gold} />
      </div>
      <div className="absolute top-2 right-2">
        <StreakTracker streak={streak} />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <GoldCurveGraph goldHistory={goldHistory} />
      </div>
    </div>
  );
};

export default OverlayApp;
