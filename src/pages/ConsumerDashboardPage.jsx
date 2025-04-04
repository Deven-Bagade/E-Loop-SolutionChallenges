import React from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import DeviceHealthCertification from '../components/ConsumerDashboard/DeviceHealthCertification';
import ResaleMarketplace from '../components/ConsumerDashboard/ResaleMarketplace';
import RecyclingLocator from '../components/ConsumerDashboard/RecyclingLocator';
import CarbonCalculator from '../components/ConsumerDashboard/CarbonCalculator';

const ConsumerDashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isProducer={false} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar userType="consumer" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DeviceHealthCertification />
            <ResaleMarketplace />
            <RecyclingLocator />
            <CarbonCalculator />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConsumerDashboardPage;