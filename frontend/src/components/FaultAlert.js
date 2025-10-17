import React from 'react';

const FaultAlert = ({ faults, severity }) => {
  if (!faults || faults.length === 0) return null;

  const bgColor = severity === 'critical' ? 'bg-red-600' : 'bg-yellow-500';
  const icon = severity === 'critical' ? (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );

  return (
    <div className={`${bgColor} text-white shadow-2xl animate-slideIn`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="animate-pulse-slow">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {severity === 'critical' ? '🚨 CRITICAL FAULT DETECTED' : '⚠️ WARNING'}
              </h3>
              <p className="text-sm opacity-90">
                {faults[0].description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-75">Immediate attention required</p>
            <p className="text-xs opacity-75 mt-1">
              {faults.length > 1 && `+${faults.length - 1} more issue${faults.length > 2 ? 's' : ''}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaultAlert;

