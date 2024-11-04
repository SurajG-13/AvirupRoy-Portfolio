import React from 'react';

const GalleryIntro = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-6xl font-extrabold">
          <span className="relative inline-block">
            <span className="absolute inset-0 -skew-x-12 transform bg-red-500 opacity-30" />
            <span className="relative z-10">Gallery Opening</span>
          </span>
        </h1>
        <h2 className="text-center text-4xl font-bold">
          <span className="relative inline-block">
            <span className="absolute inset-0 -skew-x-12 transform bg-red-500 opacity-30" />
            <span className="relative z-10">Join Us!</span>
          </span>
        </h2>
        <p className="mt-4 text-center text-gray-700">
          Experience art like never before at our new gallery. Don’t miss out!
        </p>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-black opacity-10"></div>
      </div>
    </div>
  );
};

export default GalleryIntro;
