import React from 'react';
import Brands2 from '../Work/Brands2';

export default function Introduction() {
  return (
    <>
      <main className="bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white">
        <section className="mx-24 my-10">
          <div className="font-SF text-4xl">
            <p>
              A passionate and dedicated Cinematographer, Editor, and
              Photographer with over 5 years of experience bringing stories to
              life through the lens.
            </p>
          </div>
        </section>

        <section className="m-24 grid grid-cols-6">
          <section className="col-span-3 flex gap-20 font-SF text-4xl">
            <div className="flex gap-8">
              <img
                src="/icons/layer-svgrepo-com.svg"
                alt=""
                className="h-12 w-12"
              />

              <p className="flex flex-col">
                <p> 200+ </p>
                <p> Projects Done </p>
              </p>
            </div>

            <div className="flex gap-8">
              <img
                src="/icons/cube-svgrepo-com.svg"
                alt=""
                className="h-12 w-12"
              />

              <p className="flex flex-col">
                <p> 90+ </p>
                <p> Brand Collabs </p>
              </p>
            </div>
          </section>
          <div className="text-md col-span-3 mx-10 items-center text-center font-SF">
            <p>
              I'm Avirup Roy, course-name undergraduate. <br /> My journey in
              visual storytelling has taken me across diverse projects, from
              cinematic films to captivating commercials and breathtaking
              photography.
            </p>
          </div>
        </section>
        <Brands2 />
        <section className="m-24">
          <div className="flex">
            <div className="h-fit w-fit rounded-3xl border px-8 py-2 font-jetbrainsMono text-3xl text-inherit">
              About Me
            </div>
            <div className="px-4 font-SF text-6xl">
              <p>A Cinematographer </p>
            </div>
          </div>
          <div className="space-x-96 p-4 font-SF text-6xl">
            <p>by Trade, Creativity, Passion & Skill </p>
          </div>
        </section>
      </main>
    </>
  );
}
