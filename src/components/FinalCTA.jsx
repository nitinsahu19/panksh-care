import { motion } from "framer-motion";
import { PhoneCall, CalendarDays } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blur-3xl opacity-10 -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Begin Your Child’s Journey With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-teal-100 mb-12 leading-relaxed"
        >
          Whether your child needs structured early foundations or specialised
          support, Panksh Care provides the right balance of guidance, care, and
          growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <button className="flex items-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300">
            <CalendarDays className="w-5 h-5" />
            Book a School Tour
          </button>

          <button className="flex items-center gap-3 border border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
            <PhoneCall className="w-5 h-5" />
            Schedule Consultation
          </button>
        </motion.div>

        {/* FORM WILL BE ADDED BELOW */}
        <div className="mt-20 bg-white/10 backdrop-blur rounded-3xl p-10 border border-white/20">
          <p className="text-lg text-teal-100">
            Inquiry Form Section Will Be Integrated Here
          </p>
        </div>
      </div>
    </section>
  );
}
