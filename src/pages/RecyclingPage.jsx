import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecyclingPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'recycle') {
      navigate('/recycle');
    } else if (selectedOption === 'education') {
      navigate('/education');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">E-Waste Recycling</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div 
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${selectedOption === 'recycle' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
            onClick={() => handleOptionSelect('recycle')}
          >
            <h2 className="text-xl font-semibold mb-3">Recycle Device</h2>
            <p className="text-gray-600">Schedule pickup or drop-off for your e-waste items</p>
          </div>
          
          <div 
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${selectedOption === 'education' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'}`}
            onClick={() => handleOptionSelect('education')}
          >
            <h2 className="text-xl font-semibold mb-3">Learn About E-Waste</h2>
            <p className="text-gray-600">Educational resources about proper e-waste disposal</p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedOption}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${selectedOption ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RecyclingPage;