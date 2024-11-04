const MusicVideo = () => {
  return (
    <img
      src="/photos/AVRP/1.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
      onError={(e) => {
        console.error('Image failed to load', e);
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg';
      }}
    />
  );
};

const AdShoot = () => {
  return (
    <img
      src="/photos/AVRP/1.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
      onError={(e) => {
        console.error('Image failed to load', e);
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg';
      }}
    />
  );
};

const Reels = () => {
  return (
    <img
      src="/photos/AVRP/1.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
      onError={(e) => {
        console.error('Image failed to load', e);
        e.target.onerror = null;
        e.target.src = '/path/to/fallback/image.jpg';
      }}
    />
  );
};
