import React, { useEffect, useState } from 'react';
import Card from '../Common/Card';
import Loader from '../Common/Loader';

interface MatchInfo {
  placement: number;
  gold_left: number;
  rounds: number;
}

const SummaryView: React.FC = () => {
  const [matchData, setMatchData] = useState<MatchInfo | null>(null);

  useEffect(() => {
    overwolf.games.events.getInfo((info) => {
      const data = info?.res?.match_info;
      if (data) {
        setMatchData({
          placement: parseInt(data.placement || '0'),
          gold_left: parseInt(data.gold_left || '0'),
          rounds: parseInt(data.rounds || '0'),
        });
      }
    });
  }, []);

  if (!matchData) return <Loader />;

  return (
    <div className="bg-backdrop text-white min-h-screen p-8 font-sans shadow-overlay">
      <h1 className="text-3xl font-bold mb-6">Post-Game Summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card title="Final Placement">
          <div className="text-4xl text-center text-gold font-bold">#{matchData.placement}</div>
        </Card>
        <Card title="Gold Left">
          <div className="text-4xl text-center text-gold font-semibold">{matchData.gold_left}g</div>
        </Card>
        <Card title="Rounds Played">
          <div className="text-3xl text-center">{matchData.rounds}</div>
        </Card>
      </div>
    </div>
  );
};

export default SummaryView;
