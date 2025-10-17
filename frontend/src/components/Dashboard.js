import React from 'react';
import MetricCard from './MetricCard';
import TirePressure from './TirePressure';
import LiveIndicator from './LiveIndicator';

const Dashboard = ({ vehicleData, faults }) => {
  const getStatusColor = (value, type) => {
    if (type === 'temperature') {
      if (value > 105) return 'text-red-600';
      if (value > 95) return 'text-yellow-600';
      return 'text-green-600';
    }
    if (type === 'battery') {
      if (value < 11.5) return 'text-red-600';
      if (value < 12.0) return 'text-yellow-600';
      return 'text-green-600';
    }
    if (type === 'oil') {
      if (value < 30) return 'text-red-600';
      if (value < 50) return 'text-yellow-600';
      return 'text-green-600';
    }
    return 'text-gray-600';
  };

  const getStatusIcon = (value, type) => {
    const color = getStatusColor(value, type);
    if (color.includes('red')) return '🔴';
    if (color.includes('yellow')) return '🟡';
    return '🟢';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Vehicle Dashboard</h2>
          <p className="text-white/90 text-lg">Real-time monitoring and AI-powered insights</p>
        </div>
        <LiveIndicator />
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <MetricCard
          title="Engine Temperature"
          value={`${vehicleData.engine_temperature.toFixed(1)}°C`}
          icon="🌡️"
          status={getStatusIcon(vehicleData.engine_temperature, 'temperature')}
          color={getStatusColor(vehicleData.engine_temperature, 'temperature')}
          description="Optimal: 85-95°C"
        />
        
        <MetricCard
          title="Battery Voltage"
          value={`${vehicleData.battery_voltage.toFixed(2)}V`}
          icon="🔋"
          status={getStatusIcon(vehicleData.battery_voltage, 'battery')}
          color={getStatusColor(vehicleData.battery_voltage, 'battery')}
          description="Optimal: 12.0-14.5V"
        />
        
        <MetricCard
          title="Oil Level"
          value={`${vehicleData.oil_level.toFixed(1)}%`}
          icon="🛢️"
          status={getStatusIcon(vehicleData.oil_level, 'oil')}
          color={getStatusColor(vehicleData.oil_level, 'oil')}
          description="Optimal: 50-100%"
        />
      </div>

      {/* Tire Pressure Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <span>🛞</span>
            <span>Tire Pressure</span>
          </h3>
          <span className="text-sm text-white/80">Optimal: 32-35 PSI</span>
        </div>
        <TirePressure pressures={vehicleData.tire_pressure} />
      </div>

      {/* AI Insights Section */}
      {faults && faults.length > 0 && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <span>🤖</span>
            <span>AI Fault Analysis</span>
          </h3>
          <div className="space-y-3">
            {faults.map((fault, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  fault.severity === 'critical'
                    ? 'bg-red-50 border-red-500'
                    : 'bg-yellow-50 border-yellow-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{fault.message}</h4>
                    <p className="text-sm text-gray-600 mt-1">{fault.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    fault.severity === 'critical'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {fault.severity.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Status */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span>📊</span>
              System Status
            </h3>
            <p className="text-white/95 text-lg">
              {faults && faults.length > 0 
                ? `${faults.length} issue${faults.length > 1 ? 's' : ''} detected`
                : 'All systems operational ✓'}
            </p>
          </div>
          <div className="text-right bg-white/20 rounded-lg p-3 backdrop-blur-sm">
            <p className="text-sm text-white/90 font-semibold">Last Updated</p>
            <p className="text-white font-mono text-base font-bold">
              {new Date(vehicleData.timestamp).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

