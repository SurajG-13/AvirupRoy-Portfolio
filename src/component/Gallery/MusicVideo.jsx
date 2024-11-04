import React, { useState, useRef, useEffect } from 'react';

export default function MusicVideo() {
  const videoLinks = [
    'https://www.youtube.com/embed/jVaBfDtfOXY?si=2TfRScxUPBR61aWk',
    'https://www.youtube.com/embed/Jt9kjpwX1Nk',
    'https://www.youtube.com/embed/usclb5aQzyM',
    'https://www.youtube.com/embed/AS7O7KR-M90',
    'https://www.youtube.com/embed/rs0jkbqulw4',
    'https://www.youtube.com/embed/ndPQBdgvNms',
  ];

  const [visible, setVisible] = useState(Array(videoLinks.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
          observer.unobserve(entry.target);
        }
      });
    });

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refs]);

  return (
    <main className="bg-inherit p-5">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {videoLinks.map((link, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            data-index={index}
            className="overflow-hidden rounded-md bg-white shadow-lg"
          >
            {visible[index] ? (
              <iframe
                className="h-60 w-full"
                src={link}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex h-64 items-center justify-center text-gray-400">
                Loading...
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
