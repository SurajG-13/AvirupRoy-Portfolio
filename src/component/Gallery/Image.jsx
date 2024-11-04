import React from 'react';

const Image = () => {
  const images = [
    '/photos/AVRP/1.jpg',
    '/photos/AVRP/DSC07525.jpg',
    '/photos/AVRP/DSC08588.jpg',
    '/photos/AVRP/DSC08646.jpg',
    '/photos/AVRP/IMG_0532.jpg',
    '/photos/AVRP/DSC08932.jpg',
    '/photos/AVRP/IMG_0884.jpg',
    '/photos/AVRP/IMG_0929.jpg',
    '/photos/AVRP/IMG_2196.jpg',
    '/photos/AVRP/IMG_1106.jpg',
    '/photos/AVRP/IMG_2387.jpg',
    '/photos/AVRP/2.jpg',
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="grid gap-4">
          {images.slice(i * 3, i * 3 + 3).map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`Gallery image ${i * 3 + index + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Image;
