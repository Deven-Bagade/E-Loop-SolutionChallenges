import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResalePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listTab');
  const [deviceDetails, setDeviceDetails] = useState({
    type: '',
    model: '',
    condition: '',
    price: '',
    description: '',
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeviceDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    // In a real app, you would upload to cloud storage
    const files = Array.from(e.target.files);
    setDeviceDetails(prev => ({
      ...prev,
      images: [...prev.images, ...files.slice(0, 3)] // Limit to 3 images
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Device listed:', deviceDetails);
    alert('Your device has been listed for resale!');
    navigate('/resale/marketplace');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Device Resale Marketplace</h1>
        
        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 font-medium ${activeTab === 'list' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            List Your Device
          </button>
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-4 py-2 font-medium ${activeTab === 'marketplace' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Browse Marketplace
          </button>
        </div>

        {activeTab === 'list' ? (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">List Your Device for Resale</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Device Type*</label>
                  <select
                    name="type"
                    value={deviceDetails.type}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select device type</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="smartwatch">Smartwatch</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model*</label>
                  <input
                    type="text"
                    name="model"
                    value={deviceDetails.model}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                    placeholder="e.g. iPhone 13, MacBook Pro 2020"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Condition*</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Excellent', 'Good', 'Fair'].map((condition) => (
                    <label key={condition} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                      <input
                        type="radio"
                        name="condition"
                        value={condition}
                        checked={deviceDetails.condition === condition}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600"
                        required
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)*</label>
                <div className="relative">
                  <span className="absolute left-3 top-3">$</span>
                  <input
                    type="number"
                    name="price"
                    value={deviceDetails.price}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-8 border rounded-lg"
                    placeholder="Enter asking price"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                <textarea
                  name="description"
                  value={deviceDetails.description}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  rows="4"
                  placeholder="Describe your device's condition, any flaws, included accessories, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photos (Max 3)*</label>
                <div className="flex items-center space-x-4">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 p-4 rounded-lg border-2 border-dashed border-gray-300">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      multiple
                    />
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm mt-1">Select Images</span>
                    </div>
                  </label>
                  <div className="flex space-x-2">
                    {deviceDetails.images.map((image, index) => (
                      <div key={index} className="relative w-16 h-16 border rounded-md overflow-hidden">
                        <img 
                          src={URL.createObjectURL(image)} 
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setDeviceDetails(prev => ({
                            ...prev,
                            images: prev.images.filter((_, i) => i !== index)
                          }))}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 mt-4"
              >
                List Device for Resale
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Available Devices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample marketplace items - in a real app these would come from an API */}
              {[
                {
                  id: 1,
                  title: 'iPhone 12 Pro',
                  price: '$450',
                  condition: 'Good',
                  score: 78,
                  image: 'https://via.placeholder.com/300'
                },
                {
                  id: 2,
                  title: 'MacBook Air 2020',
                  price: '$650',
                  condition: 'Excellent',
                  score: 92,
                  image: 'https://via.placeholder.com/300'
                },
                {
                  id: 3,
                  title: 'Samsung Galaxy S21',
                  price: '$350',
                  condition: 'Fair',
                  score: 65,
                  image: 'https://via.placeholder.com/300'
                }
              ].map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <div className="flex items-center my-2">
                      <div className="relative w-12 h-12 mr-3">
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
                            strokeDasharray={`${item.score}, 100`}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                          {item.score}
                        </span>
                      </div>
                      <div>
                        <p className="text-xl font-bold">{item.price}</p>
                        <p className={`text-sm ${
                          item.condition === 'Excellent' ? 'text-green-600' :
                          item.condition === 'Good' ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {item.condition} Condition
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => navigate(`/resale/device/${item.id}`)}
                      className="w-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResalePage;