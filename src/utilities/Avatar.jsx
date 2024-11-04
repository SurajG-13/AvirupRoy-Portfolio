import React from 'react';

const AvatarGroup = () => {
  const avatars = [
    {
      src: '/photos/BrandLogo/RB.svg',
      alt: 'User 1',
    },
    {
      src: '/photos/BrandLogo/1652253586413_52.PNG',
      alt: 'User 2',
    },
    {
      src: '/photos/BrandLogo/SBIHM.png',
      alt: 'User 3',
    },
    {
      src: 'https://via.placeholder.com/40/FF33A1/FFFFFF?text=4',
      alt: 'User 4',
    },
  ];

  const lastAvatarCount = avatars.length - 1;

  return (
    <div className="flex items-center">
      {avatars.slice(0, lastAvatarCount).map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        />
      ))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-inherit text-center text-inherit ring-2 ring-white">
        +{'90'}
      </div>
    </div>
  );
};

export default AvatarGroup;
