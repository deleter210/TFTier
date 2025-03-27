import React, { useState, useEffect } from 'react';

const HackEventMonitor: React.FC = () => {
  const [hackActive, setHackActive] = useState<boolean>(false);

  useEffect(() => {
    // Listen for real hack events via GEO.
    const interval = setInterval(() => {
      setHackActive(Math.random() > 0.7);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 bg-opacity-50 text-white p-2 rounded mt-2">
      <h2 className="font-bold">Hack Event Monitor</h2>
      <p>{hackActive ? 'Hack event active!' : 'No active hack event.'}</p>
    </div>
  );
};

export default HackEventMonitor;
