import React, { useState } from 'react';

const CollectionDashboard = () => {
  const [pickups, setPickups] = useState([
    { id: 1, location: 'Mumbai Warehouse', scheduled: '2023-11-15', status: 'Pending', weight: '850kg' },
    { id: 2, location: 'Delhi Distribution Center', scheduled: '2023-11-18', status: 'Confirmed', weight: '1200kg' },
    { id: 3, location: 'Bangalore Retail Hub', scheduled: '2023-11-20', status: 'Completed', weight: '650kg' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setPickups(pickups.map(p => 
      p.id === id ? {...p, status: newStatus} : p
    ));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Collections</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheduled Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pickups.map((pickup) => (
                <tr key={pickup.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{pickup.location}</div>
                    <div className="text-sm text-gray-500">Lat: 19.0760, Long: 72.8777</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pickup.scheduled}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pickup.weight}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      pickup.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      pickup.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pickup.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {pickup.status === 'Pending' && (
                      <button
                        onClick={() => handleStatusChange(pickup.id, 'Confirmed')}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Confirm
                      </button>
                    )}
                    <button
                      onClick={() => {/* Map integration would go here */}}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Map
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Request New Pickup</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Estimated Weight (kg)</label>
              <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Pickup Date</label>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Schedule Pickup
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollectionDashboard;