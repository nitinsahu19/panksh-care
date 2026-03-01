// import Header from "@/components/Header"
// import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Centres() {
  const centres = [
    {
      name: "Main Centre",
      address: "Your Location, City",
      phone: "+91 (Your Phone)",
      email: "info@pankshcare.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM",
      services: [
        "Early Intervention (0-6 Years)",
        "Speech & Language Therapy",
        "Occupational Therapy",
        "Behavioral Support",
      ],
      image: "🏢",
    },
    {
      name: "Branch Centre",
      address: "Branch Location, City",
      phone: "+91 (Your Phone)",
      email: "info@pankshcare.com",
      hours: "Mon - Fri: 9:00 AM - 4:30 PM",
      services: [
        "Playgroup & Nursery",
        "Therapeutic Sessions",
        "Parent Coaching",
        "School Readiness Programs",
      ],
      image: "🏫",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Centres
          </h1>
          <p className="text-lg opacity-90">
            Visit us to experience the Panksh CARE difference
          </p>
        </div>
      </section>

      {/* Centres List */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {centres.map((centre, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-secondary/5 rounded-lg border border-secondary/20 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 text-center">
                  <div className="text-6xl mb-3">{centre.image}</div>
                  <h3 className="text-2xl font-bold text-primary">
                    {centre.name}
                  </h3>
                </div>

                <div className="p-8 space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Address</p>
                        <p className="text-foreground/75 text-sm">
                          {centre.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Phone</p>
                        <p className="text-foreground/75 text-sm">
                          {centre.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <p className="text-foreground/75 text-sm">
                          {centre.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Hours</p>
                        <p className="text-foreground/75 text-sm">
                          {centre.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="pt-6 border-t border-secondary/20">
                    <p className="font-semibold text-primary mb-3">
                      Services Available:
                    </p>
                    <ul className="space-y-2">
                      {centre.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/75 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button className="w-full">
                        Schedule a Visit
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8 border-2 border-dashed border-secondary text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Expanding to Your City
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Panksh CARE is growing. If you're interested in bringing our early
              intervention and inclusive education programs to your area,
              we'd love to explore partnership opportunities.
            </p>
            <Link to="/franchise">
              <Button variant="secondary">
                Learn About Franchise Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What to Expect During Your Visit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Facility Tour",
                description:
                  "Explore our classrooms, therapy spaces, and activity areas designed for child-centric learning.",
                emoji: "🏢",
              },
              {
                title: "Meet the Team",
                description:
                  "Connect with our educators, therapists, and support staff who are passionate about child development.",
                emoji: "👥",
              },
              {
                title: "Consultation",
                description:
                  "Discuss your child's needs and how our programs can support their developmental journey.",
                emoji: "💬",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Visit?</h2>
        <p className="text-lg opacity-90 mb-8">
          Schedule your personalized tour and consultation today.
        </p>
        <Link to="/contact">
          <Button variant="secondary">
            Schedule Your Visit
          </Button>
        </Link>
      </section>

      {/* <Footer /> */}
    </div>
  )
}   