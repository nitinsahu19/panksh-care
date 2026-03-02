import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-blue-700 to-slate-900 text-white text-center px-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Inclusive Early Learning. Structured Intervention. Confident Futures.
        </h1>

        <p className="text-xl text-gray-200 mb-8">
          Education and therapeutic understanding integrated into one powerful ecosystem.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Book a School Tour
          </button>
          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-700 transition">
            Explore Programs
          </button>
        </div>
      </motion.div>

    </section>
  )
}