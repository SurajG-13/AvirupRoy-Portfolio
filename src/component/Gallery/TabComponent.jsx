import React, { useState } from 'react';
import Image from './Image';
import MusicVideo from './MusicVideo';

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState('Photographs');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Photographs':
        return <Image />;
      case 'Music Videos':
        return <MusicVideo />;
      case 'Advertisement Films':
        return <Image />;
      case 'Corporate Shoot':
        return <Image />;
      case 'Event Shoot':
        return <Image />;
      case 'Instagram Reels':
        return <Image />;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="min-h-screen w-[90vw]">
        <section className="flex w-full items-center justify-center bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white">
          <div className="flex-col md:flex md:flex-row">
            <ul className="flex gap-12 p-4">
              {[
                'Photographs',
                'Music Videos',
                'Advertisement Films',
                'Corporate Shoot',
                'Event Shoot',
                'Instagram Reels',
              ].map((tab) => (
                <li key={tab}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTab(tab);
                    }}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-jetbrainsMono transition-colors duration-300 ${selectedTab === tab ? 'bg-blue-600 text-white dark:bg-blue-600' : 'bg-gray-50 text-black hover:bg-gray-100'}`}
                    aria-current={selectedTab === tab ? 'page' : undefined}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="text-medium w-full rounded-lg p-6 transition-all duration-300">
          {renderTabContent()}
        </div>
      </main>
    </>
  );
};

export default TabComponent;
