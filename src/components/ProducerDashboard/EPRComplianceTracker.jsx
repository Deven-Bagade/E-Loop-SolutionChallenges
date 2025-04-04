import React from 'react';

const EPRComplianceTracker = () => {
  // Mock data
  const complianceData = {
    target: 1000, // kg
    collected: 750,
    progressPercentage: 75,
    status: 'On Track',
    deadline: '2023-12-31',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">EPR Compliance Tracker</h2>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Collection Progress</span>
          <span>{complianceData.progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-600 h-2.5 rounded-full" 
            style={{ width: `${complianceData.progressPercentage}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {complianceData.collected}kg / {complianceData.target}kg
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">{complianceData.status}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Deadline</p>
          <p className="font-medium">{complianceData.deadline}</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Upload Collection Data
      </button>
    </div>
  );
};

export default EPRComplianceTracker;