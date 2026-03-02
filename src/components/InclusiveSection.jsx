import { motion } from "framer-motion"
import { CheckCircle2, HeartHandshake } from "lucide-react"

export default function InclusiveSection() {

  const list = [
    "Neurotypical children",
    "Children with developmental delays",
    "Autism spectrum conditions",
    "Speech & communication challenges",
    "Behavioural & emotional regulation concerns",
    "Learning differences",
  ]

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            An Inclusive School for All Children
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Panksh Care, inclusion is not an add-on.
            It is the foundation of how we learn, teach, and grow together.
          </p>

          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {list.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-teal-500 w-7 h-7 mt-1" />
                <p className="text-slate-800 font-medium text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Inclusion Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white p-12 rounded-3xl shadow-xl text-center border border-slate-100"
        >
          <HeartHandshake className="w-12 h-12 text-teal-500 mx-auto mb-6" />

          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Our classrooms are structured to support different learning speeds,
            styles, and strengths — without separation or stigma.
          </p>

          <p className="text-xl font-semibold text-slate-900 mt-6">
            Inclusion here is not an add-on.  
            It is our foundation.
          </p>
        </motion.div>

      </div>
    </section>
  )
}