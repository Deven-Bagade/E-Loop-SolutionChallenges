import React, { useState } from 'react';

const RecyclePage = () => {
  const [deviceType, setDeviceType] = useState('');
  const [deviceCondition, setDeviceCondition] = useState('');
  const [pickupOption, setPickupOption] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call, etc.)
    console.log({
      deviceType,
      deviceCondition,
      pickupOption,
      address
    });
    alert('Recycling request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-green-700 mb-6">Recycle Your Device</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Device Type</label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select device type</option>
                <option value="smartphone">Smartphone</option>
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="tv">Television</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Device Condition</label>
              <div className="space-y-2">
                {['Working', 'Broken but repairable', 'Non-functional'].map((condition) => (
                  <label key={condition} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="condition"
                      value={condition.toLowerCase()}
                      checked={deviceCondition === condition.toLowerCase()}
                      onChange={() => setDeviceCondition(condition.toLowerCase())}
                      className="h-4 w-4 text-green-600"
                      required
                    />
                    <span>{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Option</label>
              <select
                value={pickupOption}
                onChange={(e) => setPickupOption(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select pickup option</option>
                <option value="home_pickup">Schedule Home Pickup</option>
                <option value="drop_center">Drop at Recycling Center</option>
              </select>
            </div>

            {pickupOption === 'home_pickup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  rows="3"
                  placeholder="Enter your full address"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 mt-6"
            >
              Submit Recycling Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecyclePage;