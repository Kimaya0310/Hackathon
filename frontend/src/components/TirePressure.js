import React from 'react';

const TirePressure = ({ pressures }) => {
  const tires = [
    { name: 'Front Left', position: 'top-0 left-0', pressure: pressures[0] },
    { name: 'Front Right', position: 'top-0 right-0', pressure: pressures[1] },
    { name: 'Rear Left', position: 'bottom-0 left-0', pressure: pressures[2] },
    { name: 'Rear Right', position: 'bottom-0 right-0', pressure: pressures[3] },
  ];

  const getPressureColor = (pressure) => {
    if (pressure < 26) return 'text-red-500';
    if (pressure < 30) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getPressureStatus = (pressure) => {
    if (pressure < 26) return '🔴 Low';
    if (pressure < 30) return '🟡 Warning';
    return '🟢 Normal';
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 min-h-[350px]">
      {/* Car outline representation */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Center car icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="text-7xl opacity-15">🚗</div>
        </div>
        
        {/* Tire positions with proper spacing */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Front Row */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-xl text-center min-w-[130px] hover:scale-105 transition-transform duration-200">
                <div className="text-2xl mb-2">🛞</div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Front Left</p>
                <p className={`text-3xl font-bold ${getPressureColor(pressures[0])}`}>
                  {pressures[0].toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1">PSI</p>
                <p className="text-xs mt-1 font-medium">{getPressureStatus(pressures[0])}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-xl text-center min-w-[130px] hover:scale-105 transition-transform duration-200">
                <div className="text-2xl mb-2">🛞</div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Front Right</p>
                <p className={`text-3xl font-bold ${getPressureColor(pressures[1])}`}>
                  {pressures[1].toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1">PSI</p>
                <p className="text-xs mt-1 font-medium">{getPressureStatus(pressures[1])}</p>
              </div>
            </div>
          </div>
          
          {/* Rear Row */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-xl text-center min-w-[130px] hover:scale-105 transition-transform duration-200">
                <div className="text-2xl mb-2">🛞</div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Rear Left</p>
                <p className={`text-3xl font-bold ${getPressureColor(pressures[2])}`}>
                  {pressures[2].toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1">PSI</p>
                <p className="text-xs mt-1 font-medium">{getPressureStatus(pressures[2])}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-xl text-center min-w-[130px] hover:scale-105 transition-transform duration-200">
                <div className="text-2xl mb-2">🛞</div>
                <p className="text-xs font-semibold text-gray-700 mb-1">Rear Right</p>
                <p className={`text-3xl font-bold ${getPressureColor(pressures[3])}`}>
                  {pressures[3].toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1">PSI</p>
                <p className="text-xs mt-1 font-medium">{getPressureStatus(pressures[3])}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TirePressure;

