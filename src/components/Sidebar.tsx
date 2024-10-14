import React from 'react';
import { FaTachometerAlt, FaEdit, FaImage, FaFile, FaComments, FaPaintBrush, FaPlug, FaUsers, FaTools, FaCog } from 'react-icons/fa';

const menuItems = [
  { icon: FaTachometerAlt, label: 'Dashboard' },
  { icon: FaEdit, label: 'Posts' },
  { icon: FaImage, label: 'Media' },
  { icon: FaFile, label: 'Pages' },
  { icon: FaComments, label: 'Comments' },
  { icon: FaPaintBrush, label: 'Appearance' },
  { icon: FaPlug, label: 'Plugins' },
  { icon: FaUsers, label: 'Users' },
  { icon: FaTools, label: 'Tools' },
  { icon: FaCog, label: 'Settings' },
];

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {menuItems.map((item, index) => (
        <a key={index} href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
          <item.icon className="text-xl" />
          <span>{item.label}</span>
        </a>
      ))}
      <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
        <span className="text-xl">⌄</span>
        <span>Collapse menu</span>
      </a>
    </nav>
  );
};

export default Sidebar;