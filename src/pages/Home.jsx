import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AdmissionPopup from "../components/AdmissionPopup"
import { Button } from "@/components/ui/button"

const sliderImages = [
  { src: "/slider-1.png", alt: "Admissions Open 2026-2027" },
  { src: "/slider-2.png", alt: "You Are Not Alone - Parental Support" },
  { src: "/slider-3.png", alt: "Nurturing Abilities - Empowering Children" },
  { src: "/slider-4.png", alt: "Early Intervention for Independence" },
]

const services = [
  {
    icon: "🗣️",
    title: "Speech & Language Therapy",
    description: "Communication clarity and social connection building",
  },
  {
    icon: "✋",
    title: "Occupational Therapy",
    description: "Fine motor skills and independence development",
  },
  {
    icon: "🧠",
    title: "Behavioral Support",
    description: "Emotional regulation and confidence building",
  },
  {
    icon: "🎓",
    title: "School Readiness",
    description: "Preparation for smooth school transition",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    )
    setAutoPlay(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AdmissionPopup />

      {/* Hero Slider */}
      <section className="relative w-full aspect-[16/9] md:h-[500px] overflow-hidden">
  {sliderImages.map((image, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  ))}

  {/* Previous Button */}
  <button
    onClick={prevSlide}
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 
               bg-black/50 text-white 
               p-2 md:p-3 
               rounded-full 
               hover:bg-black/70 transition"
  >
    <ChevronLeft size={20} className="md:w-6 md:h-6" />
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 
               bg-black/50 text-white 
               p-2 md:p-3 
               rounded-full 
               hover:bg-black/70 transition"
  >
    <ChevronRight size={20} className="md:w-6 md:h-6" />
  </button>
</section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-primary">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/services">
            <Button>Explore All Services</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}