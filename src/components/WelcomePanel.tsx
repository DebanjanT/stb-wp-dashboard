import React from 'react';

const WelcomePanel: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Welcome to WordPress!</h2>
      <p className="mb-4">We've assembled some links to get you started:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Get Started</h3>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Customize Your Site
          </button>
          <p className="mt-2 text-sm text-gray-600">or, change your theme completely</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">Edit your front page</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Add additional pages</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Add a blog post</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">View your site</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">More Actions</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">Manage widgets or menus</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Turn comments on or off</a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Learn more about getting started</a>
            </li>
          </ul>
        </div>
      </div>
      <button className="mt-4 text-blue-500 hover:underline">Dismiss</button>
    </div>
  );
};

export default WelcomePanel;