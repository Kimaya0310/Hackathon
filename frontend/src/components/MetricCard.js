import React from 'react';

const MetricCard = ({ title, value, icon, status, color, description }) => {
  // Calculate progress percentage based on value type
  const getProgressWidth = () => {
    const numValue = parseFloat(value);
    if (title.includes('Temperature')) {
      // Temperature: 60-120°C, optimal is 85-95
      return Math.min(100, ((numValue - 60) / 60) * 100);
    } else if (title.includes('Battery')) {
      // Battery: 10.5-14.5V, optimal is 12-14.5
      return Math.min(100, ((numValue - 10.5) / 4) * 100);
    } else if (title.includes('Oil')) {
      // Oil: 0-100%
      return numValue;
    }
    return 50;
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div className="text-5xl">{icon}</div>
        <div className={`text-3xl ${color} animate-pulse-slow`}>{status}</div>
      </div>
      
      <h3 className="text-gray-200 text-sm font-semibold mb-2 uppercase tracking-wide">{title}</h3>
      <p className={`text-5xl font-bold ${color} mb-3`}>{value}</p>
      <p className="text-xs text-white/70 mb-4">{description}</p>
      
      <div className="mt-4 h-2.5 bg-white/20 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color.replace('text-', 'bg-')} rounded-full transition-all duration-500 shadow-sm`}
          style={{ width: `${getProgressWidth()}%` }}
        />
      </div>
    </div>
  );
};

export default MetricCard;

