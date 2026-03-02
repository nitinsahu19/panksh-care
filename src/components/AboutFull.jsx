import { motion } from "framer-motion"

export default function AboutFull() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          About Panksh Care
        </motion.h2>

        <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
          <p>
            Founded by Dr. Sonika Sharma, Child Psychologist and Founder of Divit Child Development Centre,
            Panksh Care was created after years of working closely with children across developmental profiles.
          </p>

          <p>
            We saw a gap. Some children needed structured early foundations. Some needed specialised support.
            All needed understanding.
          </p>

          <p className="font-semibold">
            Panksh Care bridges education and early intervention — creating a school readiness ecosystem
            where learning and support work together seamlessly.
          </p>
        </div>

      </div>
    </section>
  )
}