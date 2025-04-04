import React, { useEffect, useState } from 'react';

const AppStatusBanner: React.FC = () => {
  const [gameRunning, setGameRunning] = useState<boolean | null>(null);

  useEffect(() => {
    overwolf.games.getRunningGameInfo(gameInfo => {
      if (gameInfo && gameInfo.isRunning && gameInfo.id === 5426) {
        setGameRunning(true);
      } else {
        setGameRunning(false);
      }
    });
  }, []);

  if (gameRunning === null) return null;

  return (
    <div
      className={`p-3 text-sm rounded-md font-medium mb-4 transition-all shadow 
        ${gameRunning ? 'bg-green-800 text-green-200' : 'bg-yellow-800 text-yellow-200'}`}
    >
      {gameRunning
        ? '✅ Teamfight Tactics is currently running.'
        : '⚠️ Teamfight Tactics is not running. You can still configure TFTier.'}
    </div>
  );
};

export default AppStatusBanner;
