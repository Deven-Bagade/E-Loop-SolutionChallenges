import React from 'react';

const ResaleMarketplace = () => {
  const listings = [
    { 
      id: 1, 
      title: 'iPhone 12 Pro', 
      price: '$450', 
      condition: 'Good', 
      score: 78,
      image: 'https://via.placeholder.com/150'
    },
    { 
      id: 2, 
      title: 'MacBook Air 2020', 
      price: '$650', 
      condition: 'Excellent', 
      score: 92,
      image: 'https://via.placeholder.com/150'
    },
    { 
      id: 3, 
      title: 'Samsung Galaxy S21', 
      price: '$350', 
      condition: 'Fair', 
      score: 65,
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Resale Marketplace</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
          List Your Device
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">{item.title}</h3>
              <div className="flex items-center my-2">
                <div className="relative w-16 h-16 mr-3">
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
                  <p className="text-2xl font-bold">{item.price}</p>
                  <p className={`text-sm ${
                    item.condition === 'Excellent' ? 'text-green-600' :
                    item.condition === 'Good' ? 'text-blue-600' : 'text-yellow-600'
                  }`}>
                    {item.condition} Condition
                  </p>
                </div>
              </div>
              <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResaleMarketplace;