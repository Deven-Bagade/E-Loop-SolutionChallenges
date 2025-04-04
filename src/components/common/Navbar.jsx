import React from 'react';

const Navbar = ({ userType }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">
          E-Waste Loop {userType === 'producer' ? 'Producer' : 'Consumer'} Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Welcome, User</span>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            U
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;