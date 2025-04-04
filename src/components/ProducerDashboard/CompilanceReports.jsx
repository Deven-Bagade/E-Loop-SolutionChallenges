import React from 'react';

const CompilanceReports = () => {
  const complianceData = {
    currentYear: {
      target: 5000,
      collected: 3750,
      progress: 75,
      status: 'On Track',
      deadline: 'Dec 31, 2023'
    },
    previousYear: {
      target: 4500,
      collected: 4200,
      progress: 93,
      status: 'Completed'
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">EPR Compliance Status</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Current Year (2023)</h3>
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span>Collection Progress</span>
                <span>{complianceData.currentYear.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${complianceData.currentYear.progress}%` }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                {complianceData.currentYear.collected.toLocaleString()}kg / {complianceData.currentYear.target.toLocaleString()}kg
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">{complianceData.currentYear.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <p className="font-medium">{complianceData.currentYear.deadline}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-2">Previous Year (2022)</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span>Collection Completed</span>
                  <span>{complianceData.previousYear.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${complianceData.previousYear.progress}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-4 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                {complianceData.previousYear.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Submit Compliance Report</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reporting Period</label>
            <select className="w-full p-2 border rounded-md">
              <option>Q1 2023</option>
              <option>Q2 2023</option>
              <option>Q3 2023</option>
              <option>Q4 2023</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Documentation</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, XLS up to 10MB</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompilanceReports;