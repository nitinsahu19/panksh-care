    import { motion } from "framer-motion"
import {
  Sparkles,
  Mic,
  Hand,
  Waves,
  Activity,
  Puzzle,
  Users,
  Home,
  BookOpen,
  Dumbbell
} from "lucide-react"

export default function ServicesOverview() {

  const services = [
    {
      icon: Sparkles,
      title: "Early Intervention School (0–6 Years)",
      desc: "Structured inclusive classrooms where education and therapeutic understanding work together."
    },
    {
      icon: Mic,
      title: "Speech & Language Therapy",
      desc: "Building clear communication, vocabulary expansion, and social interaction skills."
    },
    {
      icon: Hand,
      title: "Occupational Therapy",
      desc: "Developing fine motor skills, independence, and daily functional abilities."
    },
    {
      icon: Waves,
      title: "Sensory Support",
      desc: "Helping children regulate sensory responses and improve focus and comfort."
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      desc: "Strengthening coordination, posture, movement confidence, and endurance."
    },
    {
      icon: Puzzle,
      title: "Developmental Play-Based Therapy",
      desc: "Using structured and guided play to build social, emotional, and cognitive growth."
    },
    {
      icon: Users,
      title: "Parent Coaching & Family Support",
      desc: "Empowering families with structured strategies for long-term developmental success."
    },
    {
      icon: Home,
      title: "Day Care | Individual Care & Development Hub",
      desc: "A safe, structured, sensory-aware environment where care meets developmental progress."
    },
    {
      icon: BookOpen,
      title: "Academic Support (NIOS)",
      desc: "Flexible academic pathways with individualized guidance and structured learning support."
    },
    {
      icon: Dumbbell,
      title: "Training Programs – Arts, Sports, Yoga & Vocational Skills",
      desc: "Therapeutic skill-building activities that promote regulation, confidence, and independence."
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive developmental ecosystem designed to support children 
            across communication, regulation, learning, independence, and transition pathways.
          </p>

          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-50 group-hover:bg-teal-100 transition">
                    <Icon className="w-7 h-7 text-teal-600" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-slate-700 mb-8">
            Every service is structured, measurable, and integrated —
            ensuring children receive support that is purposeful, respectful, and growth-oriented.
          </p>

          <button className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all">
            Explore Detailed Programs
          </button>
        </motion.div>

      </div>
    </section>
  )
}