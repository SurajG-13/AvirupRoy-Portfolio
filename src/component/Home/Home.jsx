import React from 'react';

import Hero from './Hero';
import Introduction from './Introduction';
import ServicePreview from '../Preview/ServicePreview';
import ContactPreview from '../Contact/ContactPreview';

export default function Home() {
  return (
    <>
      <main className="bg-neutral-100 dark:bg-neutral-950">
        <Hero />
        <Introduction />
        <ServicePreview id="work" />
        <ContactPreview />
      </main>
    </>
  );
}
