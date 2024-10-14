import React from 'react';
import { FaWordpress, FaHome, FaBell, FaPlus } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <FaWordpress className="text-2xl" />
        <span className="font-semibold">WordPress Mess</span>
        <FaHome className="text-xl" />
        <FaBell className="text-xl" />
        <FaPlus className="text-xl" />
      </div>
      <div className="flex items-center space-x-4">
        <span>Howdy, Admin</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;