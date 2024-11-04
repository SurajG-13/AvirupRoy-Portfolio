import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    id: 1,
    src: '/photos/AVRP/1.jpg',
  },
  {
    id: 2,
    src: '/photos/AVRP/2.jpg',
  },
  {
    id: 3,
    src: '/photos/AVRP/DSC07525.jpg',
  },
  {
    id: 4,
    src: '/photos/AVRP/DSC08646.jpg',
  },
  {
    id: 5,
    src: '/photos/AVRP/DSC08646.jpg',
  },
  {
    id: 6,
    src: '/photos/AVRP/DSC08932.jpg',
  },
  {
    id: 7,
    src: '/photos/AVRP/DSC08913.jpg',
  },

  {
    id: 8,
    src: '/photos/AVRP/1.jpg',
  },
  {
    id: 9,
    src: '/photos/AVRP/2.jpg',
  },
  {
    id: 10,
    src: '/photos/AVRP/DSC07525.jpg',
  },
  {
    id: 11,
    src: '/photos/AVRP/DSC08646.jpg',
  },
  {
    id: 12,
    src: '/photos/AVRP/DSC08646.jpg',
  },
  {
    id: 13,
    src: '/photos/AVRP/DSC08932.jpg',
  },
  {
    id: 14,
    src: '/photos/AVRP/DSC08913.jpg',
  },
];

const Example = () => {
  return (
    <div className="bg-inherit text-black dark:text-white">
      <div className="ml-24 flex items-center justify-start">
        <span className="font-Aeonik text-4xl text-inherit">My Work</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-Aeonik text-6xl font-semibold uppercase text-inherit">
          Your One Stop Solution For
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-inherit">
      <div className="sticky top-0 mt-16 flex h-fit items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Example;
