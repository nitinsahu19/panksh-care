import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/slider-1.png",
    title: "Nurturing Abilities.",
    subtitle: "Empowering Every Child.",
  },
  {
    image: "/slider-2.png",
    title: "You Are Not Alone.",
    subtitle: "We listen. We guide. We support.",
  },
  {
    image: "/slider-3.png",
    title: "Early Intervention That Builds Independence",
    subtitle: "Child-centric. Inclusive. Personalized.",
  },
  {
    image: "/slider-4.png",
    title: "Admissions Open 2026–2027",
    subtitle: "Limited seats available for focused care.",
  },
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
    <section className="relative h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="slide"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 max-w-4xl"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl"
            >
              {slides[index].subtitle}
            </motion.p>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full hover:bg-white/50 transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full hover:bg-white/50 transition"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  )
}