import React from 'react';
import { motion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

function Brands() {
  return (
    <>
      <main className="h-screen">
        <section>
          <div className="m-24 flex items-center justify-start font-SF text-3xl text-black dark:text-white md:text-8xl">
            Clients
          </div>
        </section>

        <section>
          <div className="mx-10 mt-10 flex items-center justify-evenly overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {BrandLogo.concat(BrandLogo).map((skill, index) => (
                <motion.img
                  key={skill.id + (index < BrandLogo.length ? 'A' : 'B')}
                  src={skill.src}
                  alt={skill.alt}
                  className="mx-10 h-24 w-24"
                  aria-label={skill.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  role="img"
                  aria-hidden="true"
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section>
          <div className="mx-10 mt-10 flex items-center justify-evenly overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: '-100%' }}
              animate={{ x: '0' }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {BrandLogo.concat(BrandLogo).map((skill, index) => (
                <motion.img
                  key={skill.id + (index < BrandLogo.length ? 'A' : 'B')}
                  src={skill.src}
                  alt={skill.alt}
                  className="mx-10 h-24 w-24"
                  aria-label={skill.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  role="img"
                  aria-hidden="true"
                />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Brands;
