import React from 'react';

interface RoundData {
  round: number;
  result: string;
  gold: number;
  opponent?: string;
}

const RoundTable: React.FC = () => {
  // Replace dummyRounds with real data from Analytics.getAnalyticsData()
  const dummyRounds: RoundData[] = [
    { round: 1, result: 'Win', gold: 50 },
    { round: 2, result: 'Loss', gold: 45, opponent: 'Player A' },
    { round: 3, result: 'Win', gold: 52 },
    { round: 4, result: 'Win', gold: 60 },
    { round: 5, result: 'Loss', gold: 55, opponent: 'Player B' }
  ];

  return (
    <div className="mt-4">
      <h2 className="font-bold">Stage History</h2>
      <table className="w-full border-collapse text-sm text-white">
        <thead>
          <tr>
            <th className="border p-2">Round</th>
            <th className="border p-2">Result</th>
            <th className="border p-2">Gold</th>
            <th className="border p-2">Opponent</th>
          </tr>
        </thead>
        <tbody>
          {dummyRounds.map((round) => (
            <tr key={round.round}>
              <td className="border p-2">{round.round}</td>
              <td className="border p-2">{round.result}</td>
              <td className="border p-2">{round.gold}</td>
              <td className="border p-2">{round.opponent || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundTable;
