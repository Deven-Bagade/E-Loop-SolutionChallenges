import React from 'react';

const PickupRequests = () => {
  // Mock data
  const thresholdData = {
    current: 800,
    target: 1000,
    progressPercentage: 80,
    status: 'On Track',
    nextPickup: '2023-11-15',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Collection Threshold</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Collection Progress</span>
          <span>{thresholdData.progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${thresholdData.progressPercentage}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {thresholdData.current}kg / {thresholdData.target}kg
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">{thresholdData.status}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Next Pickup</p>
          <p className="font-medium">{thresholdData.nextPickup}</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Request Early Pickup
      </button>
    </div>
  );
};

export default PickupRequests;