import React from 'react';
import TabComponent from './TabComponent';

export default function Gallery() {
  return (
    <>
      <main className="min-h-screen bg-neutral-100 px-16 py-8 text-black dark:bg-neutral-950 dark:text-white">
        <section>
          {/* <div className="flex h-fit w-full items-center justify-center py-6 font-harmond text-8xl leading-10 tracking-wide text-accent">
            <h1>My Gallery</h1>
          </div> */}

          <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-inherit">
            <img
              src="/photos/Gallery.png"
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-h-screen py-4">
            <TabComponent />
          </div>
        </section>
      </main>
    </>
  );
}
