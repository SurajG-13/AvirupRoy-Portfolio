import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

import { GradualSpacing } from '../../utilities/GradualSpacing';
import { Link } from 'react-router-dom';

export default function ServicePreview() {
  return (
    <>
      <main
        id="work"
        className="bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white"
      >
        <section className="flex items-center justify-between px-24 py-10">
          <GradualSpacing
            text="Creative Services for Your Success"
            duration={0.1}
            delayMultiple={0.1}
            className="font-SF text-5xl font-bold"
          />
          <Link to="/Gallery">
            <motion.button
              onClick={{ scale: 1.2, rotate: 180 }}
              className="font-SF text-3xl hover:underline"
            >
              Open Gallery <FiArrowUpRight className="inline-flex" />
            </motion.button>
          </Link>
        </section>

        <section className="grid grid-cols-3 gap-4 p-10">
          <div className="group relative h-80">
            <img
              src="/photos/AVRP/IMG_0929.jpg"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-transparent bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.95, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="relative mb-4 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-6 py-1 font-jetbrainsMono text-2xl font-medium text-white backdrop-blur-3xl transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
                  PhotoGraphy
                  <FiArrowUpRight className="inline-flex h-10 w-10" />
                </span>
              </motion.button>
            </div>
          </div>

          <div className="group relative h-80">
            <video
              autoPlay
              muted
              loop
              src="/videos/Arabian 1.mp4"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button className="rounded-3xl bg-transparent px-12 py-4 uppercase tracking-widest text-black shadow-[inset_0_0_0_2px_#616467] transition duration-200 hover:bg-[#616467] hover:text-white dark:text-neutral-200">
                Playlist <FiArrowUpRight className="inline-flex" />
              </button>
            </div>
          </div>

          <div className="group relative h-80">
            <video
              autoPlay
              muted
              loop
              src="/videos/Influencer reel.mp4"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mt-2 text-lg">Photography</p>
              <p className="mt-2 text-center">Capturing Immortal Frames</p>
              <p className="mt-1 text-center">
                As a photographer, I capture the essence of moments, turning
                them into timeless images.
              </p>
              <button className="mt-4 rounded bg-white px-4 py-2 text-black transition hover:bg-gray-200">
                More Info
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-4 p-10">
          <div className="group relative h-80">
            <img
              src="/photos/AVRP/IMG_0929.jpg"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mt-2 text-lg">Photography</p>
              <p className="mt-2 text-center">Capturing Immortal Frames</p>
              <p className="mt-1 text-center">
                As a photographer, I capture the essence of moments, turning
                them into timeless images.
              </p>
              <button className="mt-4 rounded bg-white px-4 py-2 text-black transition hover:bg-gray-200">
                More Info
              </button>
            </div>
          </div>

          <div className="group relative h-80">
            <video
              autoPlay
              muted
              loop
              src="/videos/Arabian 1.mp4"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mt-2 text-lg">Photography</p>
              <p className="mt-2 text-center">Capturing Immortal Frames</p>
              <p className="mt-1 text-center">
                As a photographer, I capture the essence of moments, turning
                them into timeless images.
              </p>
              <button className="mt-4 rounded bg-white px-4 py-2 text-black transition hover:bg-gray-200">
                More Info
              </button>
            </div>
          </div>

          <div className="group relative h-80">
            <video
              autoPlay
              muted
              loop
              src="/videos/Influencer reel.mp4"
              alt="Photography"
              className="h-full w-full rounded object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="mt-2 text-lg">Photography</p>
              <p className="mt-2 text-center">Capturing Immortal Frames</p>
              <p className="mt-1 text-center">
                As a photographer, I capture the essence of moments, turning
                them into timeless images.
              </p>
              <button className="mt-4 rounded bg-white px-4 py-2 text-black transition hover:bg-gray-200">
                More Info
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
