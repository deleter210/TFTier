import React, { useEffect, useState } from 'react';
import { getItemCheatSheet } from '../../services/dataDragon';

interface Item {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

const ItemCheatSheet: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getItemCheatSheet().then(setItems);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map(item => (
        <div key={item.id} className="bg-gray-700 rounded p-2 text-sm shadow hover:bg-gray-600">
          <div className="flex items-center gap-2 mb-1">
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <span className="font-semibold text-white">{item.name}</span>
          </div>
          <p className="text-gray-300 text-xs">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCheatSheet;
