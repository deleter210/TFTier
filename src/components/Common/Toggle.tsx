import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <button
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${checked ? 'bg-green-500' : 'bg-gray-400'}`}
      onClick={() => onChange(!checked)}
    >
      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-6' : ''}`} />
    </button>
  );
};

export default Toggle;
