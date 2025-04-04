import React, { useState } from 'react';

const EducationPage = () => {
  const [activeTab, setActiveTab] = useState('why');

  const educationContent = {
    why: {
      title: "Why Recycle E-Waste?",
      content: [
        "E-waste contains toxic materials like lead, mercury, and cadmium that can harm the environment",
        "Recycling conserves valuable resources like gold, silver, and copper",
        "Proper disposal prevents data security risks from discarded devices",
        "Helps reduce illegal dumping in developing countries"
      ]
    },
    how: {
      title: "How To Recycle",
      content: [
        "Remove all personal data from devices before recycling",
        "Find certified e-waste recyclers in your area",
        "Check for manufacturer take-back programs",
        "Separate batteries from devices when possible",
        "Never throw electronics in regular trash"
      ]
    },
    impact: {
      title: "Environmental Impact",
      content: [
        "Recycling 1 million laptops saves energy equivalent to 3,500 homes/year",
        "Only 20% of global e-waste is properly recycled",
        "Cell phone recycling can save enough energy to power 24,000 homes/year",
        "Proper recycling prevents groundwater contamination"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-green-700 mb-6">E-Waste Education Center</h1>
          
          <div className="flex border-b">
            {Object.keys(educationContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {educationContent[tab].title}
              </button>
            ))}
          </div>

          <div className="py-6">
            <h2 className="text-xl font-semibold mb-4">{educationContent[activeTab].title}</h2>
            <ul className="space-y-3 list-disc pl-5">
              {educationContent[activeTab].content.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Ready to recycle your devices?</h3>
            <p className="text-blue-700 mb-3">Click below to start the recycling process</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Start Recycling Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;