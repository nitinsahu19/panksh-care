import { motion } from "framer-motion"
import {
  Building2,
  GraduationCap,
  ShieldCheck,
  BookOpenCheck,
  Megaphone,
  HeartHandshake
} from "lucide-react"

export default function FranchiseFull() {

  const benefits = [
    {
      icon: Building2,
      title: "Established Institutional Model",
      desc: "A structured and field-tested Early Intervention and Inclusive Education framework."
    },
    {
      icon: GraduationCap,
      title: "Integrated Academic & Therapeutic Ecosystem",
      desc: "School Readiness, Therapy, NIOS, and Vocational pathways within one institutional structure."
    },
    {
      icon: ShieldCheck,
      title: "Complete Training & Governance Support",
      desc: "Setup guidance, staff training, SOP manuals, and compliance systems."
    },
    {
      icon: BookOpenCheck,
      title: "Standardised Curriculum & Assessment",
      desc: "Structured developmental tracking with objective transition pathways."
    },
    {
      icon: Megaphone,
      title: "Brand & System Support",
      desc: "Operational frameworks, admission systems, marketing tools, and review protocols."
    },
    {
      icon: HeartHandshake,
      title: "Purpose with Sustainability",
      desc: "Create meaningful social impact while building a stable institutional model."
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600 blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 blur-3xl opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Become a Panksh CARE Franchise Partner
          </h2>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Establish an Institution. Create Impact.  
            Build a Purpose-Driven Legacy grounded in structure, science, and dignity.
          </p>

          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Intro Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-slate-300 text-lg leading-relaxed mb-24"
        >
          Panksh CARE is expanding across cities with a structured,
          therapy-integrated institutional model dedicated to Early Intervention,
          Inclusive Learning, Therapeutic Support, NIOS Guidance, and Vocational Development.
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
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
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-700">
                    <Icon className="w-7 h-7 text-teal-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <p className="text-lg text-slate-300 mb-8">
            This is not a passive investment opportunity.  
            It is a mission-aligned institutional partnership.
          </p>

          <button className="bg-teal-500 hover:bg-teal-400 text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300">
            Explore Institutional Franchise Opportunity
          </button>
        </motion.div>

      </div>
    </section>
  )
}