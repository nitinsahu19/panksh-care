import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { image: "/slider-1.png" },
  { image: "/slider-2.png" },
  { image: "/slider-3.png" },
  { image: "/slider-4.png" },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-[65vh] md:h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="slide"
            className="
              w-full h-full 
              object-cover 
              md:object-cover 
              object-center
            "
          />

          {/* Soft overlay only on desktop */}
          <div className="hidden md:block absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows (hide on small screens for cleaner UI) */}
      <button
        onClick={prev}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full hover:bg-white/50 transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={next}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full hover:bg-white/50 transition"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white w-6 md:w-8"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  )
}