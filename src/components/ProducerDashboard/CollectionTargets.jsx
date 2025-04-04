import React, { useState } from 'react';

const CollectionTargets = () => {
  const [targets, setTargets] = useState({
    q1: 1250,
    q2: 1250,
    q3: 1250,
    q4: 1250
  });

  const [showForm, setShowForm] = useState(false);
  const [newTarget, setNewTarget] = useState('');

  const handleUpdateTargets = (e) => {
    e.preventDefault();
    const updatedTargets = {
      q1: parseInt(newTarget) || 0,
      q2: parseInt(newTarget) || 0,
      q3: parseInt(newTarget) || 0,
      q4: parseInt(newTarget) || 0
    };
    setTargets(updatedTargets);
    setShowForm(false);
    setNewTarget('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Annual Collection Targets</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {showForm ? 'Cancel' : 'Update Targets'}
          </button>
        </div>

        {showForm ? (
          <form onSubmit={handleUpdateTargets} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Quarterly Target (kg)
              </label>
              <input
                type="number"
                value={newTarget}
                onChange={(e) => setNewTarget(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter target amount"
                min="0"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Save Targets
            </button>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(targets).map(([quarter, target]) => (
              <div key={quarter} className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900">
                  {quarter.toUpperCase()} Target
                </h3>
                <p className="text-2xl font-bold mt-2">
                  {target.toLocaleString()} kg
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Collection Partners</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Q1 Collection</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 1, name: 'GreenCycle Recycling', location: 'Mumbai', collection: '420 kg', status: 'Active' },
                { id: 2, name: 'EcoTech Disposals', location: 'Bangalore', collection: '380 kg', status: 'Active' },
                { id: 3, name: 'CleanEarth Solutions', location: 'Delhi', collection: 'Pending', status: 'Pending' },
              ].map((partner) => (
                <tr key={partner.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{partner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.collection}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      partner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {partner.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Partner
        </button>
      </div>
    </div>
  );
};

export default CollectionTargets;