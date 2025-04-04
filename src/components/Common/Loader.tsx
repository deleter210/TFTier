import React from 'react';

const Loader: React.FC = () => (
  <div className="flex justify-center items-center p-4">
    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gold"></div>
  </div>
);

export default Loader;
