import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isProducer }) => {
  const producerLinks = [
    { name: 'EPR Compliance', path: '/epr' },
    { name: 'Eco-Design', path: '/eco-design' },
    { name: 'Collection', path: '/collection' },
    { name: 'Reports', path: '/reports' },
  ];

  const consumerLinks = [
    { name: 'Device Health', path: '/device-health' },
    { name: 'Resale', path: '/resale' },
    { name: 'Recycling Center', path: '/recycling' },
    { name: 'Education', path: '/education' }
  ];

  
  const links = isProducer ? producerLinks : consumerLinks;

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1">
          <nav className="mt-10">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
  to={link.path}
  className={({ isActive }) => 
    `block px-4 py-2 rounded-md transition ${
      isActive ? 'bg-gray-700 font-medium' : 'hover:bg-gray-700'
    }`
  }
>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="pb-4">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;