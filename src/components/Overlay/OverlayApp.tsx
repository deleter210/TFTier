import React, { useEffect, useState } from 'react';
import GoldTracker from './Gold/GoldTracker';
import StreakTracker from './Gold/StreakTracker';
import GoldCurveGraph from './Gold/GoldCurveGraph';
import ItemCheatSheet from './ItemCheatSheet';
import PinnedComps from './PinnedComps';

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
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overlay-ui fixed inset-0 pointer-events-none text-white font-sans">
      <div className="absolute top-2 left-2 pointer-events-auto">
        <GoldTracker gold={gold} />
      </div>
      <div className="absolute top-2 right-2 pointer-events-auto">
        <StreakTracker streak={streak} />
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <GoldCurveGraph goldHistory={goldHistory} />
      </div>
      <div className="absolute top-24 left-2 w-[300px] pointer-events-auto">
        <ItemCheatSheet />
      </div>
      <div className="absolute top-24 right-2 w-[300px] pointer-events-auto">
        <PinnedComps />
      </div>
    </div>
  );
};

export default OverlayApp;
