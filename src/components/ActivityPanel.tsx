import React from "react";

const ActivityPanel: React.FC = () => {
  const recentlyPublished = [
    { title: "Post Sample Number 3", date: "Today, 3:46 pm" },
    { title: "Post Sample Number 2", date: "Today, 3:46 pm" },
    { title: "Post Sample Number 1", date: "Today, 3:46 pm" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Activity</h2>
      <h3 className="font-semibold mb-2">Recently Published</h3>
      <ul className="space-y-2">
        {recentlyPublished.map((post, index) => (
          <li key={index}>
            <span className="text-sm text-gray-600">{post.date}</span>
            <br />
            <a href="#" className="text-blue-500 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPanel;
