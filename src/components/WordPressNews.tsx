import React from 'react';

const WordPressNews: React.FC = () => {
  const news = [
    {
      title: 'WordPress 4.7.2 Security Release',
      date: 'January 26, 2017',
      content: 'WordPress 4.7.2 is now available. This is a security release for all previous versions and we strongly encourage you to update your sites immediately. WordPress versions 4.7.1 and earlier are affected by three security issues: The user interface for assigning taxonomy terms in Press This is shown to users who do not have permissions to use it. [...]',
    },
    {
      title: 'HeroPress: HeroPress at 100',
      date: '',
      content: '',
    },
    {
      title: 'WPTavern: Web Annotations are Now a W3C Standard, Paving the Way for Decentralized Annotation Infrastructure',
      date: '',
      content: '',
    },
    {
      title: 'WPTavern: WPCampus 2017 to Take Place July 14-15 in Buffalo, NY',
      date: '',
      content: '',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">WordPress News</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index}>
            <a href="#" className="text-blue-500 hover:underline font-semibold">
              {item.title}
            </a>
            {item.date && <span className="text-sm text-gray-600 ml-2">{item.date}</span>}
            {item.content && <p className="mt-1 text-sm text-gray-700">{item.content}</p>}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a href="#" className="text-blue-500 hover:underline">
          Popular Plugin: SiteOrigin Widgets Bundle (install)
        </a>
      </p>
    </div>
  );
};

export default WordPressNews;