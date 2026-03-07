import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
      description: "We usually reply within 24 hours",
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
      details: "Mon – Fri: 9:00 AM – 5:00 PM",
      description: "Saturday by appointment",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg text-white/90">
            Have questions about our programs or services? Our team is here to
            guide you and support your child’s journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-lg transition"
              >
                <Icon className="w-8 h-8 text-teal-600 mb-4" />

                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>

                <p className="font-medium text-slate-900">{info.details}</p>

                <p className="text-sm text-slate-500">{info.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-50 to-blue-50 flex-1">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>

              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Write your message here..."
                required
              />

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Why Connect */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Why Connect With Us?</h2>

              <ul className="space-y-4">
                {[
                  "Get personalised guidance for your child’s development",
                  "Schedule a centre visit and meet our team",
                  "Explore franchise partnership opportunities",
                  "Learn about our early intervention programs",
                  "Understand our learning approach and methods",
                  "Discuss specialised support for your child",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
              <h3 className="font-semibold text-lg mb-3">Response Time</h3>

              <p className="text-slate-600 mb-4">
                We usually respond within 24 business hours. For urgent queries,
                please contact us by phone.
              </p>

              <div className="bg-slate-50 rounded-md p-4 text-sm">
                <strong>Consultation Hours</strong>
                <br />
                Monday – Friday: 10:00 AM – 4:00 PM
                <br />
                Saturday: By Appointment Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            What Are You Looking For?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Admissions", emoji: "📝", link: "/admissions" },
              { title: "Centre Visit", emoji: "🏢", link: "/centres" },
              { title: "Franchise Info", emoji: "🤝", link: "/franchise" },
              { title: "Services Info", emoji: "💬", link: "/services" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="p-8 rounded-xl border hover:shadow-md transition bg-gradient-to-br from-slate-50 to-white"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>

                <h3 className="font-semibold text-lg">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
