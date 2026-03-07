import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/react/slider-1.png",
  "/react/slider-2.png",
  "/react/slider-3.png",
  "/react/slider-4.png",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white">
      <div
        className="
        relative 
        w-full 
        max-h-screen 
        flex 
        items-center 
        justify-center
      "
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt="Panksh Care Banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="
              w-full 
              h-auto 
              max-h-screen 
              object-contain
            "
          />
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-teal-600" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
