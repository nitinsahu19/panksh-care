import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"

export default function Services() {
  const [activeTab, setActiveTab] = useState("early-intervention")

  const services = [
    {
      id: "early-intervention",
      name: "Early Intervention School (0–6 Years)",
      icon: "🌱",
      shortDesc:
        "Foundation for learning through inclusive, structured support",
      details: {
        overview:
          "The early years are the foundation of lifelong learning. Our Early Intervention program supports children in an inclusive, structured, and emotionally safe environment.",
        keyPoints: [
          "All children follow a common learning framework",
          "Individual developmental goals",
          "Support adjusted inside classroom",
          "No labels — only understanding",
          "Children learn together",
        ],
      },
    },
    {
      id: "speech-therapy",
      name: "Speech & Language Therapy",
      icon: "🗣️",
      shortDesc:
        "Building clear communication and social connection skills",
      details: {
        overview:
          "Speech therapy supports children in developing clear and effective communication skills.",
        keyPoints: [
          "Speech clarity",
          "Vocabulary expansion",
          "Conversation skills",
          "Alternative communication methods",
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg opacity-90">
            Comprehensive support for every aspect of your child's development
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className="bg-gradient-to-br from-secondary/10 to-accent/10 border rounded-lg p-8 cursor-pointer hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600">
                {service.shortDesc}
              </p>
              <div className="flex items-center text-accent mt-4 text-sm font-semibold">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Tabs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === service.id
                    ? "bg-primary text-white"
                    : "bg-white border"
                }`}
              >
                {service.icon} {service.name}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {services.map(
            (service) =>
              activeTab === service.id && (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-8 shadow"
                >
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {service.name}
                  </h2>

                  <p className="text-gray-700 mb-6">
                    {service.details.overview}
                  </p>

                  <h3 className="text-xl font-bold mb-4">
                    Key Focus Areas:
                  </h3>

                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.details.keyPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-center">
                    <Link to="/contact">
                      <Button>
                        Book Assessment for This Service
                      </Button>
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Learn More?
        </h2>
        <p className="mb-6">
          Schedule a consultation with our team to understand how we can
          support your child.
        </p>
        <Link to="/contact">
          <Button>Get in Touch</Button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}