import React, { useEffect, useState } from 'react';
import { pinnedComps } from '../../services/storage';

const PinnedComps: React.FC = () => {
  const [comps, setComps] = useState<any[]>([]);
  const [newComp, setNewComp] = useState('');

  useEffect(() => {
    pinnedComps.get().then(setComps);
  }, []);

  const save = async () => {
    const updated = [...comps, { id: Date.now(), text: newComp }];
    await pinnedComps.set(updated);
    setComps(updated);
    setNewComp('');
  };

  const remove = async (id: number) => {
    const updated = comps.filter(c => c.id !== id);
    await pinnedComps.set(updated);
    setComps(updated);
  };

  return (
    <div className="p-2 bg-gray-900 text-white rounded space-y-2">
      <h2 className="text-lg font-bold">📌 Pinned Comps</h2>
      <ul className="space-y-1">
        {comps.map(c => (
          <li key={c.id} className="flex justify-between items-center">
            <span>{c.text}</span>
            <button onClick={() => remove(c.id)} className="text-red-400 hover:underline">Remove</button>
          </li>
        ))}
      </ul>
      <input
        value={newComp}
        onChange={e => setNewComp(e.target.value)}
        placeholder="Comp name or notes..."
        className="w-full p-1 rounded bg-gray-800 border border-gray-700"
      />
      <button
        onClick={save}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-3 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default PinnedComps;
