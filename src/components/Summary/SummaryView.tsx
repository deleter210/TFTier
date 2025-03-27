import React from 'react';
import SummaryChart from './SummaryChart';
import RoundTable from './RoundTable';

const SummaryView: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Match Summary</h1>
      <SummaryChart />
      <RoundTable />
      {/* Additional analytics sections (unit/item usage, pivot points, etc.) can be added here */}
    </div>
  );
};

export default SummaryView;
