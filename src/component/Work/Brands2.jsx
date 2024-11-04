import React from 'react';
import { motion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

function Brands2() {
  const totalLogos = BrandLogo.concat(BrandLogo);

  return (
    <main>
      <section>
        <div className="mx-2 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {totalLogos.map((skill, index) => (
              <motion.img
                key={`${skill.id}-${index}`}
                src={skill.src}
                alt={skill.alt}
                className="mx-10 h-20 w-20"
                aria-label={skill.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                role="img"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Brands2;
