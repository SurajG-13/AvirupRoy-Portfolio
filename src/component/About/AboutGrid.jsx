import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
// import { Apps } from './AboutDataSet';

const Block = memo(({ className, style, children }) => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{ type: 'spring', mass: 3, stiffness: 400, damping: 50 }}
    className={twMerge(
      'col-span-4 overflow-hidden rounded-3xl border border-zinc-700 bg-[#1A1A1A] p-4',
      className,
    )}
    style={style}
  >
    {children}
  </motion.div>
));

const AboutGrid = () => {
  const [tasks] = useState([
    { id: 1, text: 'Publish a Website', completed: true },
    { id: 2, text: 'Do Freelancing Work', completed: true },
    { id: 3, text: 'Write [first] LinkedIn Post', completed: false },
    { id: 4, text: 'Get a Job', completed: false },
    { id: 5, text: 'Work in a Research Paper', completed: false },
  ]);

  return (
    <main className="bg-darkBackground grid grid-cols-12 items-center justify-evenly gap-3 px-6 py-0 md:px-24">
      <section className="col-span-12 flex flex-col p-0 md:col-span-3">
        <div className="">
          {' '}
          <MovieBlock />
        </div>
        <HeadphoneBlock />
      </section>

      <section className="col-span-12 flex flex-col justify-around p-0 md:col-span-6">
        <ToDoBlock tasks={tasks} />
        <div className="grid w-full grid-flow-col grid-cols-12 items-center gap-2">
          <div className="col-span-12 md:col-span-6">
            <LocationBlock />
          </div>
          <div className="col-span-12 md:col-span-6">
            <AppBlock />
          </div>
        </div>
      </section>

      <section className="col-span-12 flex flex-col justify-around p-0 md:col-span-3">
        <FootballBlock />
        <PlaylistBlock />
      </section>
    </main>
  );
};

const MovieBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 mb-2 md:col-span-3"
    style={{ height: '260px' }}
  >
    <div className="flex items-center">
      <img
        src="images/Apps/Netflix.svg"
        alt="Netflix Logo"
        className="size-10"
      />
      <h1 className="text-dullWhite ml-2 font-medium leading-tight">
        Currently Watching <br />
        <span className="text-primaryWhite">Modern Family</span>
      </h1>
    </div>
    <a
      href="https://www.imdb.com/title/tt1442437/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mt-3 h-[175px] w-full overflow-hidden rounded-xl">
        <motion.img
          src="/images/Others/ModernFamilyPoster.jpg"
          alt="Modern Family Poster"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </div>
    </a>
  </Block>
));

const ToDoBlock = memo(({ tasks }) => (
  <Block
    className="col-span-12 row-span-2 mb-2 md:col-span-6"
    style={{ height: '318px' }}
  >
    <div className="flex items-center">
      <img src="images/Apps/BookMark.svg" alt="Bookmark" className="size-10" />
      <h1 className="text-dullWhite mb-2 ml-2 font-medium leading-tight">
        Career <br />
        <span className="text-primaryWhite">To Do List</span>
      </h1>
    </div>
    <div className="m-0 flex h-full items-center justify-center">
      <div className="w-full rounded-lg bg-inherit px-2 pb-6 shadow-md">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`mb-1 flex items-center rounded-lg p-2 ${task.completed ? 'bg-neutral-950 line-through' : 'bg-neutral-950'}`}
            >
              <span
                className={`flex h-5 w-5 cursor-not-allowed items-center justify-center rounded-full border-2 ${task.completed ? 'border-green-400 bg-green-400' : 'border-gray-400'} mr-2`}
              >
                {task.completed && (
                  <span className="text-xs text-white">✓</span>
                )}
              </span>
              <span className="text-white">{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Block>
));

const FootballBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 mb-2 mt-2 md:col-span-3"
    style={{ height: '262px' }}
  >
    <div className="flex items-center">
      <img src="images/Others/Stadium.svg" alt="Stadium" className="size-10" />
      <h1 className="text-dullWhite ml-2 font-medium leading-tight">
        Favourite Club
        <br />
        <span className="text-primaryWhite">FC Barcelona</span>
      </h1>
    </div>
    <div className="mt-3 h-[175px] w-full overflow-hidden rounded-xl">
      <motion.img
        src="/images/Others/FCB2.jpg"
        alt="FC Barcelona"
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.1 }}
        loading="lazy"
      />
    </div>
  </Block>
));

const HeadphoneBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 mb-2 md:col-span-3"
    style={{ height: '260px' }}
  >
    <div className="flex items-center">
      <img
        src="/images/Others/Headphone.svg"
        alt="Headphone"
        className="size-10"
      />
      <h1 className="text-dullWhite ml-3 font-medium leading-tight">
        Sound Gear <br />
        <span className="text-primaryWhite">Truther Hexa</span>
      </h1>
    </div>
    <div className="mt-3 h-[175px] w-full overflow-hidden rounded-xl">
      <motion.img
        src="/images/Others/Hexa.jpg"
        alt="Playlist Cover"
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.1 }}
        loading="lazy"
      />
    </div>
  </Block>
  // <Block
  //   className="col-span-12 row-span-2 md:col-span-3 mt-0"
  //   style={{ height: "260px" }}
  // >
  //   <div className="object-cover">
  //     <ImageStack className="object-cover" />
  //   </div>
  // </Block>
));

const LocationBlock = memo(() => (
  <Block
    className="col-span-12 flex flex-col items-center gap-2 md:col-span-3"
    style={{ height: '200px' }}
  >
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img
        src="/images/Others/Location.svg"
        alt="Location Icon"
        className="h-20 w-20"
        loading="lazy"
      />
      <p className="text-dullWhite mt-4 text-center text-2xl">India/Kolkata</p>
    </div>
  </Block>
));

const AppBlock = memo(() => (
  <Block
    className="col-span-12 flex flex-col items-center gap-2 md:col-span-3"
    style={{ height: '200px' }}
  >
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <img
          src="/images/Others/AppStore.svg"
          alt="App Store"
          className="h-8 w-8"
          loading="lazy"
        />
        <h1 className="text-dullWhite text-xl">Apps I use the most</h1>
      </div>
      <div className="ml-12 flex justify-center overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {Apps.concat(Apps).map((App, index) => (
            <motion.img
              key={App.id + index}
              src={App.src}
              alt={App.alt}
              className="mx-2 h-10 w-10"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  </Block>
));

const PlaylistBlock = memo(() => (
  <Block
    className="col-span-12 row-span-2 mb-2 md:col-span-3"
    style={{ height: '260px' }}
  >
    <div className="flex items-center">
      <img
        src="images/Apps/AppleMusic.svg"
        alt="Apple Music"
        className="size-10"
      />
      <h1 className="text-dullWhite ml-3 font-medium leading-tight">
        Looking for a playlist? <br />
        <span className="text-primaryWhite">Surpirse!</span>
      </h1>
    </div>
    <a
      href="https://music.apple.com/in/artist/shreya-ghoshal/19715559"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mt-3 h-[175px] w-full overflow-hidden rounded-xl">
        <motion.img
          src="/images/Others/MusicPlayer.jpg"
          alt="Playlist Cover"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </div>
    </a>
  </Block>
));

export default AboutGrid;
