import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Services() {

  const [activeTab, setActiveTab] = useState("early-intervention")

  const services = [
    {
      id: "early-intervention",
      name: "Early Intervention School (0–6 Years)",
      icon: "🌱",
      shortDesc:
        "Foundation for learning through inclusive, structured developmental support.",
      details: {
        overview:
          "The early years are the most critical stage of brain development. Our Early Intervention School supports children through structured learning, play-based activities, and integrated developmental support in a safe and inclusive environment.",
        keyPoints: [
          "Common learning framework for all children",
          "Individual developmental goals for each child",
          "Support integrated inside classroom routines",
          "Inclusive environment without labels",
          "Social learning through peer interaction",
        ],
      },
    },

    {
      id: "speech-therapy",
      name: "Speech & Language Therapy",
      icon: "🗣️",
      shortDesc:
        "Supporting communication, language development, and social interaction.",
      details: {
        overview:
          "Communication is the foundation of connection. Our speech and language therapy helps children improve speech clarity, language understanding, and social communication skills.",
        keyPoints: [
          "Speech clarity and articulation",
          "Vocabulary expansion and sentence building",
          "Understanding and following instructions",
          "Conversation and social communication skills",
          "Alternative communication strategies when required",
        ],
      },
    },
  ]

  const activeService = services.find((s) => s.id === activeTab)

  return (
    <div className="min-h-screen bg-slate-50">


      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Services
          </motion.h1>

          <p className="mt-4 text-lg text-teal-100">
            Comprehensive developmental support designed to nurture every child’s potential.
          </p>
        </div>
      </section>


      {/* SERVICE CARDS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              onClick={() => setActiveTab(service.id)}
              className="bg-gradient-to-br from-teal-50 to-blue-50 border rounded-xl p-8 cursor-pointer shadow-sm hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {service.name}
              </h3>

              <p className="text-sm text-slate-600">
                {service.shortDesc}
              </p>

              <div className="flex items-center text-teal-600 mt-4 text-sm font-semibold">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}

        </div>
      </section>


      {/* SERVICE DETAILS */}
      <section className="py-20 px-4 bg-slate-50">

        <div className="max-w-5xl mx-auto">

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">

            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === service.id
                    ? "bg-teal-600 text-white"
                    : "bg-white border"
                }`}
              >
                {service.icon} {service.name}
              </button>
            ))}

          </div>


          {/* Details */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-10 shadow"
          >

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {activeService.name}
            </h2>

            <p className="text-slate-700 mb-8 leading-relaxed">
              {activeService.details.overview}
            </p>

            <h3 className="text-xl font-semibold mb-4">
              Key Focus Areas
            </h3>

            <ul className="grid md:grid-cols-2 gap-3">

              {activeService.details.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                  <span>{point}</span>
                </li>
              ))}

            </ul>


            <div className="mt-10 text-center">

              <Link to="/contact">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Book Assessment for This Service
                </button>
              </Link>

            </div>

          </motion.div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Learn More?
        </h2>

        <p className="mb-8 text-teal-100">
          Schedule a consultation with our specialists and discover the right support for your child.
        </p>

        <Link to="/contact">
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </Link>

      </section>

      <Footer />

    </div>
  )
}
