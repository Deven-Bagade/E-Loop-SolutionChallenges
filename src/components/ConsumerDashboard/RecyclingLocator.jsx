import React, { useState } from 'react';

const RecyclingLocator = () => {
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState(5);
  const [locations, setLocations] = useState([
    { id: 1, name: 'Green Earth Recycling', distance: '0.5 miles', address: '123 Eco St' },
    { id: 2, name: 'E-Waste Hub', distance: '1.2 miles', address: '456 Green Ave' },
    { id: 3, name: 'Tech Disposal Center', distance: '2.8 miles', address: '789 Renew Blvd' }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log(`Searching for centers near ${zipCode} within ${radius} miles`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recycling Locator</h2>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter zip code"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Radius (miles)</label>
            <select
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {[5, 10, 15, 20, 25].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Find Centers
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        {locations.map((location) => (
          <div key={location.id} className="border p-4 rounded-lg hover:bg-gray-50">
            <h3 className="font-medium text-lg">{location.name}</h3>
            <p className="text-gray-600">{location.address}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">{location.distance} away</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclingLocator;