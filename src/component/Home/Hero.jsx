import React from 'react';
import AvatarGroup from '../../utilities/Avatar';

export default function Hero() {
  return (
    <>
      <main className="h-screen bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white">
        <section className="pt-6">
          <div className="mx-24 flex items-center justify-evenly font-Aeonik text-2xl leading-10 text-inherit md:text-7xl">
            <p className="">Cinematographer </p>
            <div className="relative h-16 w-48 overflow-hidden rounded-3xl shadow-lg">
              <video
                autoPlay
                loop
                muted
                src="/videos/Darjeeling.mp4"
                alt="Hi!"
                className="absolute inset-0 h-full w-full object-cover"
              ></video>
            </div>
            <p className=""> Editor</p>

            <br />
          </div>
          <div className="flex items-center justify-center font-Aeonik text-3xl leading-10 md:text-7xl">
            <p>Delivering Ideas into Real Life Products</p>
          </div>
        </section>

        <section className="mx-24 mt-16 grid h-min grid-cols-12 gap-6 overflow-hidden">
          <div className="col-span-6 flex h-full flex-col">
            <div className="flex items-center justify-center gap-12">
              <AvatarGroup />
              <p className="text-left font-Aeonik text-3xl text-inherit">
                90+ <br /> Satisfied Clients
              </p>
              <img src="/icons/Camera.svg" className="h-12 w-12 object-cover" />
            </div>

            <div className="m-10 flex gap-6 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                src="/videos/reo styleup.mp4"
                alt="Video"
                className="h-80 object-cover"
              />
              <video
                autoPlay
                loop
                muted
                src="/videos/reo styleup.mp4"
                alt="Video"
                className="h-80 object-cover"
              />
              <video
                autoPlay
                loop
                muted
                src="/videos/reo styleup.mp4"
                alt="Video"
                className="h-80 object-cover"
              />
            </div>
          </div>

          <div className="col-span-6 h-[27rem] overflow-hidden">
            <img
              src="photos/AvirupRoy.jpg"
              alt="Profile"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
