import React, { useState } from 'react';

const CarbonCalculator = () => {
  const [deviceType, setDeviceType] = useState('smartphone');
  const [yearsExtended, setYearsExtended] = useState(1);

  const calculateSavings = () => {
    // Mock calculation
    const baseValues = {
      smartphone: 85,
      laptop: 300,
      tablet: 120,
    };
    return baseValues[deviceType] * yearsExtended;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Carbon Savings Calculator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Device Type</label>
          <select
            className="w-full p-2 border rounded-md"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years Extended: {yearsExtended}
          </label>
          <input
            type="range"
            min="1"
            max="5"
            value={yearsExtended}
            onChange={(e) => setYearsExtended(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="p-4 bg-green-50 rounded-md">
          <h3 className="font-medium text-green-800">Estimated Carbon Savings</h3>
          <p className="text-2xl font-bold text-green-600">
            {calculateSavings()} kg CO₂e
          </p>
          <p className="text-sm text-green-700 mt-1">
            Equivalent to {Math.round(calculateSavings() / 5)} tree seedlings grown for 10 years
          </p>
        </div>
      </div>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
        Learn Repair Options
      </button>
    </div>
  );
};

export default CarbonCalculator;