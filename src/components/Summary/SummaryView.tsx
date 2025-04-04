import React, { useEffect, useState } from 'react';

const SummaryView: React.FC = () => {
  const [matchData, setMatchData] = useState<any | null>(null);

  useEffect(() => {
    overwolf.games.events.getInfo(info => {
      if (info?.res?.match_info) {
        setMatchData(info.res.match_info);
      }
    });
  }, []);

  if (!matchData) {
    return <div className="p-4 text-white">Loading match summary...</div>;
  }

  const placement = matchData.placement || 'N/A';
  const finalGold = matchData.gold_left || 0;
  const rounds = matchData.rounds || [];

  return (
    <div className="p-4 text-gray-200 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Post-Game Summary</h1>
      <p className="mb-2">Placement: <span className="font-bold text-xl">{placement}</span></p>
      <p className="mb-2">Final Gold Left: {finalGold}</p>
      <p className="mb-4">Total Rounds: {rounds.length}</p>
      <div className="mt-8">
        <p className="text-lg mb-2">(More stats and graphs coming soon)</p>
      </div>
    </div>
  );
};

export default SummaryView;
