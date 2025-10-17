import React from 'react';

const LiveIndicator = () => {
  return (
    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        <div className="relative w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
      <span className="text-white font-medium text-sm">LIVE</span>
    </div>
  );
};

export default LiveIndicator;

