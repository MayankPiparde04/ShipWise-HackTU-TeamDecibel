import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTestimonials = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 py-12 rounded-full  bg-opacity-80 backdrop-blur-sm">
      <div className="relative h-[400px] min-w-[400px] mx-auto">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: index === active ? 1 : 0, // Set opacity of non-active images to 0 to hide them
                scale: index === active ? 1 : 0.95,
                z: index === active ? 0 : -100, // Keep non-active images behind the active one
                rotate: index === active ? 0 : randomRotateY(),
                zIndex: index === active ? 999 : -1, // Only active image will have a higher zIndex
                y: index === active ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={testimonial.src}
                alt={`testimonial-${index}`}
                className="h-full w-full object-cover rounded-3xl aspect-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
