import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { easeInOut, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactPreview() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isAnimating, setIsAnimating] = useState(false);

  const svgAnimate = {
    initial: { rotate: -180 },
    animate: { rotate: 0, transition: { duration: 1 } },
  };

  const pathAnimate = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 4, ease: 'linear' },
    },
  };

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [inView]);

  return (
    <main
      className="bg-neutral-100 p-24 text-black dark:bg-neutral-950 dark:text-white"
      ref={ref}
    >
      <section className="w-fit rounded-3xl border px-6 font-Aeonik text-xl leading-relaxed text-inherit">
        Do you have a project in mind?
      </section>

      <section className="flex items-center gap-80">
        <div className="from-gray-600 via-gray-200 to-gray-500 bg-clip-text p-8 font-Aeonik uppercase leading-10 tracking-wide text-black dark:bg-gradient-to-r dark:text-transparent md:text-9xl">
          Contact Me
        </div>
        <div className="rounded-full border border-purple-500">
          <motion.svg
            variants={svgAnimate}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="violet"
            className="size-28 animate-pulse"
            animate={isAnimating ? 'animate' : 'initial'}
          >
            <motion.path
              variants={pathAnimate}
              initial="initial"
              animate={isAnimating ? 'animate' : 'initial'}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </motion.svg>
        </div>
      </section>
      <hr />
    </main>
  );
}
