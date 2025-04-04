import React from 'react';

const DeviceHealthCertification = () => {
  const device = {
    name: 'iPhone 12 Pro',
    age: '2 years',
    score: 78,
    status: 'Good',
    issues: [
      { name: 'Battery Health', value: '82%', status: 'warning' },
      { name: 'Screen Condition', value: 'No cracks', status: 'good' },
      { name: 'Water Damage', value: 'None detected', status: 'good' },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Device Health Certification</h2>
      <div className="flex items-center mb-4">
        <div className="relative w-20 h-20 mr-4">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3"
              strokeDasharray={`${device.score}, 100`}
            />
            <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#333">
              {device.score}
            </text>
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-lg">{device.name}</h3>
          <p className="text-gray-600">{device.age} old</p>
          <p className={`font-medium ${
            device.score > 80 ? 'text-green-600' :
            device.score > 60 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {device.status} Condition
          </p>
        </div>
      </div>
      <div className="space-y-2">
        {device.issues.map((issue, index) => (
          <div key={index} className="flex justify-between">
            <span>{issue.name}</span>
            <span className={`font-medium ${
              issue.status === 'good' ? 'text-green-600' :
              issue.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {issue.value}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Certify Another Device
      </button>
    </div>
  );
};

export default DeviceHealthCertification;