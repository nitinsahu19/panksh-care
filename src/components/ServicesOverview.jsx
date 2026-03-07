import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Mic,
  Hand,
  Waves,
  Activity,
  Home,
  BookOpen,
  Dumbbell,
} from "lucide-react";

export default function ServicesOverview() {

  const navigate = useNavigate();

  const services = [
    {
      icon: Sparkles,
      title: "Early Intervention School (0–6 Years)",
      desc: "Structured inclusive classrooms where education and therapeutic understanding work together.",
      image: "/react/services/early-intervention.png",
      slug: "early-intervention",
    },
    {
      icon: Mic,
      title: "Speech & Language Therapy",
      desc: "Building clear communication, vocabulary expansion, and social interaction skills.",
      image: "/react/services/therapeutic-support.png",
      slug: "speech-therapy",
    },
    {
      icon: Hand,
      title: "Occupational Therapy",
      desc: "Developing fine motor skills, independence, and daily functional abilities.",
      image: "/react/services/occupational-therapy.png",
      slug: "occupational-therapy",
    },
    {
      icon: Waves,
      title: "Sensory Support",
      desc: "Helping children regulate sensory responses and improve focus and comfort.",
      image: "/react/services/sensor-therapy.png",
      slug: "sensory-support",
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      desc: "Strengthening coordination, posture, movement confidence, and endurance.",
      image: "/react/services/physical-therapy.png",
      slug: "physical-therapy",
    },
    {
      icon: Home,
      title: "Day Care | Individual Care & Development Hub",
      desc: "A safe, structured, sensory-aware environment where care meets developmental progress.",
      image: "/react/services/day-care.png",
      slug: "day-care",
    },
    {
      icon: BookOpen,
      title: "Academic Support (NIOS)",
      desc: "Flexible academic pathways with individualized guidance and structured learning support.",
      image: "/react/services/nios.png",
      slug: "nios-academic-support",
    },
    {
      icon: Dumbbell,
      title: "Training Programs – Arts, Sports, Yoga & Vocational Skills",
      desc: "Therapeutic skill-building activities that promote regulation, confidence, and independence.",
      image: "/react/services/vocational.png",
      slug: "training-programs",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive developmental ecosystem designed to support children
            across communication, regulation, learning, independence, and
            transition pathways.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                onClick={() => navigate(`/services/${service.slug}`)}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10 }}
                className="cursor-pointer group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transition"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}