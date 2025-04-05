import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/image.png'; // Adjust the path to your image

const AuthSelection = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl text-green-800 font-extrabold">
          Welcome to E-Loop
        </h2>
      </div>

      <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white bg-opacity-90 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <button
                onClick={() => navigate('/auth/producer')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                I'm a Producer
              </button>
            </div>

            <div>
              <button
                onClick={() => navigate('/auth/consumer')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                I'm a Consumer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSelection;