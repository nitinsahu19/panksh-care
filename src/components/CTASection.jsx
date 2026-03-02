export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center">
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Begin Your Child’s Journey With Us
      </motion.h2>

      <div className="flex justify-center gap-6 flex-wrap">
        <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
          Book a School Tour
        </button>
        <button className="border border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition">
          Schedule Consultation
        </button>
      </div>
    </section>
  )
}