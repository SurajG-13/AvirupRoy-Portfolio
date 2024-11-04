import React from 'react';

export default function Contact() {
  return (
    <main className="h-screen w-screen bg-neutral-200 p-24 font-Aeonik text-black dark:bg-neutral-950 dark:text-white">
      <section>
        <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text font-Aeonik text-8xl text-transparent">
          Get in Touch and <br />
          let's make it happen !
        </div>
        <div className="py-8 text-3xl">
          {' '}
          Ready to work together? <br />
          Send me a message and let's strat something amazing!
        </div>
      </section>

      <section className="my-16 flex w-full">
        <div className="flex w-1/2 flex-col gap-6 text-4xl">
          <div>itisjustroy@gmail.com</div>
          <div>+91 9547954412</div>
        </div>
        <div className="w-1/2 text-4xl">
          here to bring your concept to life, manage your ongoing project or
          create something magical afresh.
        </div>
      </section>
    </main>
  );
}
