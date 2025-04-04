import React, { useEffect, useState } from 'react';
import { getPinnedComps, savePinnedComps } from '../../services/storage';

const PinnedCompsManager: React.FC = () => {
  const [comps, setComps] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getPinnedComps().then(setComps);
  }, []);

  const addComp = () => {
    if (!input.trim()) return;
    const updated = [...comps, input.trim()];
    setComps(updated);
    savePinnedComps(updated);
    setInput('');
  };

  const removeComp = (index: number) => {
    const updated = comps.filter((_, i) => i !== index);
    setComps(updated);
    savePinnedComps(updated);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
          type="text"
          placeholder="Add a comp (e.g., Irelia+Yasuo)"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={addComp}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {comps.map((comp, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span>{comp}</span>
            <button
              onClick={() => removeComp(idx)}
              className="text-sm text-red-400 hover:text-red-200"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedCompsManager;
