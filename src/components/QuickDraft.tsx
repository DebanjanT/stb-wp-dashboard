import React from 'react';

const QuickDraft: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Draft</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Draft
        </button>
      </form>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Your Recent Drafts</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Shared hosting: Meaning, Pros & Cons
            </a>
            <br />
            <span className="text-sm text-gray-600">March 6, 2017</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Let's talk about WordPress posts
            </a>
            <br />
            <span className="text-sm text-gray-600">March 6, 2017</span>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Let's talk about posts
            </a>
            <br />
            <span className="text-sm text-gray-600">February 28, 2017</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickDraft;