import React from 'react';

const HazardousWasteReports = () => {
  // Mock data
  const reports = [
    { id: 1, type: 'Lithium Batteries', quantity: '25kg', status: 'Processed' },
    { id: 2, type: 'CRT Monitors', quantity: '15 units', status: 'In Transit' },
    { id: 3, type: 'Mercury-containing', quantity: '8kg', status: 'Pending' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hazardous Waste Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    report.status === 'Processed' ? 'bg-green-100 text-green-800' :
                    report.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Generate New Report
      </button>
    </div>
  );
};

export default HazardousWasteReports; // This is the critical fix