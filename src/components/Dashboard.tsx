import React from 'react';
import WelcomePanel from './WelcomePanel';
import QuickDraft from './QuickDraft';
import ActivityPanel from './ActivityPanel';
import WordPressNews from './WordPressNews';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">
            Screen Options ▼
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-100">
            Help ▼
          </button>
        </div>
      </div>
      <WelcomePanel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickDraft />
        <ActivityPanel />
      </div>
      <WordPressNews />
    </div>
  );
};

export default Dashboard;