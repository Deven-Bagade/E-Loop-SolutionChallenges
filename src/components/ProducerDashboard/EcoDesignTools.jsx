import React, { useState } from 'react';

const EcoDesignTools = () => {
  const [activeTool, setActiveTool] = useState('assessment');
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const designRecommendations = [
    "Use modular design for easy repair and component replacement",
    "Reduce use of glued components by 40%",
    "Standardize screw types across product line",
    "Increase use of recycled plastics by 25%",
    "Implement clear disassembly instructions"
  ];

  const sustainabilityScores = {
    current: 62,
    potential: 88
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Eco-Design Toolkit</h2>
        
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'assessment', name: 'Design Assessment' },
              { id: 'recommendations', name: 'Recommendations' },
              { id: 'materials', name: 'Materials Database' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTool(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTool === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {activeTool === 'assessment' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                <select
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select category</option>
                  <option value="smartphone">Smartphone</option>
                  <option value="laptop">Laptop</option>
                  <option value="tv">Television</option>
                  <option value="appliance">Home Appliance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Design Files</label>
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
                      htmlFor="design-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                    >
                      <span>Upload design files</span>
                      <input id="design-upload" name="design-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">CAD, PDF up to 50MB</p>
                </div>
              </div>
            </div>

            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Analyze Design
            </button>
          </div>
        )}

        {activeTool === 'recommendations' && (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Sustainability Score</h3>
              <div className="flex items-center space-x-6">
                <div className="relative w-32 h-32">
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
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray={`${sustainabilityScores.current}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#065F46">
                      {sustainabilityScores.current}/100
                    </text>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-green-700">
                    Potential score with improvements: <span className="font-bold">{sustainabilityScores.potential}/100</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Design Recommendations</h3>
              <ul className="space-y-3">
                {designRecommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Implementation Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'Modular Design Guide', type: 'PDF' },
                  { name: 'Recycled Material Suppliers', type: 'List' },
                  { name: 'Disassembly Video Tutorial', type: 'Video' }
                ].map((resource, index) => (
                  <div key={index} className="border rounded-lg p-3 hover:bg-white transition">
                    <h4 className="font-medium">{resource.name}</h4>
                    <p className="text-sm text-gray-500">{resource.type}</p>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                      Download →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTool === 'materials' && (
          <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Search Materials Database</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded-l-md"
                  placeholder="Search by material, property, or application"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recyclability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Footprint</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { material: 'Recycled ABS Plastic', recyclability: 'High', footprint: 'Low', cost: '$$' },
                    { material: 'Bamboo Composite', recyclability: 'Medium', footprint: 'Very Low', cost: '$$$' },
                    { material: 'Biodegradable Polymer', recyclability: 'N/A', footprint: 'Low', cost: '$$$$' },
                    { material: 'Recycled Aluminum', recyclability: 'Very High', footprint: 'Medium', cost: '$$' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.material}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.recyclability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.footprint}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcoDesignTools;