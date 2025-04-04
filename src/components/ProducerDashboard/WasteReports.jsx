import React, { useState } from 'react';

const WasteReports = () => {
  const [activeReport, setActiveReport] = useState('hazardous');
  const [dateRange, setDateRange] = useState('last_quarter');

  const reportData = {
    hazardous: [
      { category: 'Lithium Batteries', weight: '125 kg', processed: '100 kg', pending: '25 kg' },
      { category: 'CRT Monitors', weight: '85 units', processed: '60 units', pending: '25 units' },
      { category: 'Mercury-containing', weight: '42 kg', processed: '30 kg', pending: '12 kg' },
    ],
    non_hazardous: [
      { category: 'Plastic Components', weight: '320 kg', processed: '280 kg', pending: '40 kg' },
      { category: 'Metal Parts', weight: '450 kg', processed: '420 kg', pending: '30 kg' },
      { category: 'Glass', weight: '180 kg', processed: '150 kg', pending: '30 kg' },
    ],
    all: [
      { category: 'Total Waste Collected', weight: '1,202 kg/units', processed: '1,040 kg/units', pending: '162 kg/units' },
    ]
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-xl font-semibold mb-4 sm:mb-0">Waste Reports</h2>
          <div className="flex space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="last_quarter">Last Quarter</option>
              <option value="last_month">Last Month</option>
              <option value="last_year">Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'hazardous', name: 'Hazardous Waste' },
              { id: 'non_hazardous', name: 'Non-Hazardous' },
              { id: 'all', name: 'Summary' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveReport(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeReport === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Weight/Units</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reportData[activeReport].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.processed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Generate New Report</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Hazardous Waste</option>
                <option>Non-Hazardous Waste</option>
                <option>Comprehensive</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select className="w-full p-2 border rounded-md">
                <option>Last Quarter</option>
                <option>Last Month</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Filters</label>
            <div className="flex flex-wrap gap-3">
              {['By Location', 'By Product Type', 'By Recycling Partner', 'Include Historical Data'].map((filter) => (
                <label key={filter} className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" />
                  <span>{filter}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default WasteReports;