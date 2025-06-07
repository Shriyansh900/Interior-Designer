import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl font-bold text-primary-800 mb-6">
            Studio<span className="text-accent-500">Maanikh</span>
          </h1>
        </motion.div>

        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
