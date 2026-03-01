import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Link } from "react-router-dom"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (Your Phone)",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@pankshcare.com",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Your Location, City",
      description: "Visit our main centre",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      description: "Saturday by appointment",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg opacity-90">
            Have questions? We're here to help. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-6 border border-secondary/20 hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">
                  {info.title}
                </h3>
                <p className="font-semibold text-foreground mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-foreground/75">
                  {info.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 (Your phone)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Why Connect With Us?
              </h2>

              <ul className="space-y-4">
                {[
                  "Get personalized guidance for your child's development",
                  "Schedule a facility tour and meet our team",
                  "Explore franchise partnership opportunities",
                  "Learn about enrollment in our programs",
                  "Ask questions about our approach and methodology",
                  "Discuss specialized services for your child",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
              <h3 className="text-lg font-bold text-primary mb-3">
                Response Time
              </h3>
              <p className="text-foreground/80 mb-4">
                We aim to respond within 24 business hours. For urgent matters,
                please call us directly.
              </p>

              <div className="bg-white rounded p-4">
                <p className="text-sm font-semibold text-primary mb-2">
                  Available for Consultations:
                </p>
                <p className="text-sm text-foreground/75">
                  Monday - Friday: 10:00 AM - 4:00 PM
                  <br />
                  Saturday: By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            What Are You Looking For?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Admissions", emoji: "📝", link: "/admissions" },
              { title: "Centre Visit", emoji: "🏢", link: "/centres" },
              { title: "Franchise Info", emoji: "🤝", link: "/franchise" },
              { title: "Services Info", emoji: "💬", link: "/services" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-lg p-8 transition-all group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <h3 className="font-bold text-primary">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}