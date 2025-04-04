import React, { useState } from 'react';
import ProducerSidebar from '../components/ProducerDashboard/ProducerSidebar';
import EPRComplianceTracker from '../components/ProducerDashboard/EPRComplianceTracker';
import CollectionTargets from '../components/ProducerDashboard/CollectionTargets';
import WasteReports from '../components/ProducerDashboard/WasteReports';
import EcoDesignTools from '../components/ProducerDashboard/EcoDesignTools';
import CollectionDashboard from '../components/ProducerDashboard/CollectionDashboard';


const ProducerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('compliance');
  const [showNotification, setShowNotification] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowNotification(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <ProducerSidebar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Producer Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowNotification(true)}
                className="relative p-2 text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {showNotification && (
                  <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500"></span>
                )}
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                P
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {showNotification && (
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    You have 3 pending compliance tasks to complete this quarter.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compliance' && <EPRComplianceTracker />}
          {activeTab === 'targets' && <CollectionTargets />}
          {activeTab === 'reports' && <WasteReports />}
          {activeTab === 'ecodesign' && <EcoDesignTools />}
          {activeTab === 'collection' && <CollectionDashboard />}
        </main>
      </div>
    </div>
  );
};

export default ProducerDashboardPage;