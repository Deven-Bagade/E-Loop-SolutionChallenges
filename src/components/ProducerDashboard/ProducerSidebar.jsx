import React from 'react';
import { NavLink } from 'react-router-dom';

const ProducerSidebar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'compliance', name: 'EPR Compliance', icon: '📊' },
    { id: 'targets', name: 'Collection Targets', icon: '🎯' },
    { id: 'reports', name: 'Waste Reports', icon: '📝' },
    { id: 'ecodesign', name: 'Eco-Design Tools', icon: '🌱' },
    { id: 'collection', name: 'Collection Dashboard', icon: '🚛' },

  ];

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center mb-8 p-2">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
            P
          </div>
          <div>
            <p className="font-medium">Producer Account</p>
            <p className="text-xs text-gray-300">Extended Producer Responsibility</p>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition ${activeTab === tab.id ? 'bg-gray-700 font-medium' : 'hover:bg-gray-700'}`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pb-4">
          <NavLink
            to="/"
            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            ← Back to Main Site
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProducerSidebar;