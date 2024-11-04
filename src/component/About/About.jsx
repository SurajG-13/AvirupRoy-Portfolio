import React from 'react';

import AboutIntro from './AboutIntro';
import AboutGrid from './AboutGrid';

function About() {
  return (
    <>
      <main
        id="About"
        className="overflow-hidden bg-neutral-100 from-neutral-950 via-black to-neutral-950 dark:bg-gradient-to-b"
      >
        <AboutIntro />
        <AboutGrid />
      </main>
    </>
  );
}

export default About;
