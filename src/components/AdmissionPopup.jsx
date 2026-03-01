import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Link } from "react-router-dom"

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-secondary/20 via-white to-accent/10 border-2 border-secondary rounded-xl p-6 shadow-xl animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-4">
          <div className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
            ADMISSIONS OPEN
          </div>
          <h2 className="text-2xl font-bold text-primary">
            2026-2027
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="font-semibold">
            Early Learning & Intervention Programs (Ages 2–6)
          </p>

          <p className="text-sm text-gray-600">
            Limited seats available for personalized care and focused attention.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary rounded px-4 py-3 space-y-2">
            <p className="text-xs font-bold text-primary uppercase">
              What We Offer:
            </p>
            <ul className="text-xs space-y-1">
              <li>✓ Speech Therapy</li>
              <li>✓ Occupational Therapy</li>
              <li>✓ Behavioral Support</li>
              <li>✓ School Readiness Programs</li>
            </ul>
          </div>

          <p className="text-xs italic text-gray-500">
            Every child's journey is different — and every small step matters.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mt-6">
          <Link to="/contact">
            <button className="w-full py-2 px-4 rounded-md bg-secondary text-primary font-bold hover:opacity-90 transition">
              Book a Tour Today
            </button>
          </Link>

          <Link to="/about">
            <button className="w-full py-2 px-4 rounded-md border border-secondary text-secondary font-medium hover:bg-secondary hover:text-primary transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}