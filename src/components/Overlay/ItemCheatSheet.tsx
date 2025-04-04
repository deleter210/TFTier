import React, { useEffect, useState } from 'react';
import { getItems } from '../../services/dataDragon';

const ItemCheatSheet: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  if (!items.length) return <div className="text-white p-2">Loading items...</div>;

  return (
    <div className="grid grid-cols-6 gap-2 p-2 bg-black bg-opacity-70 rounded">
      {items.map((item: any) => (
        <div key={item.id} className="flex flex-col items-center text-center text-xs text-yellow-100">
          <img src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/${item.image.full}`} alt={item.name} className="w-10 h-10" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemCheatSheet;
