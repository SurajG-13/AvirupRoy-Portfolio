import React from 'react';
import { motion } from 'framer-motion';

const MyAvatar = ({ imageUrl, name }) => {
  return (
    <motion.div
      className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-gray-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-full w-full rounded-full object-cover"
      />
      <div className="absolute text-lg font-semibold text-white"></div>
    </motion.div>
  );
};

export default MyAvatar;
