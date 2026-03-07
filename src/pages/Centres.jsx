import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Footer from "@/components/Footer"

export default function Centres() {

  const centres = [
    {
      name: "Main Centre",
      address: "Your Location, City",
      phone: "+91 (Your Phone)",
      email: "info@pankshcare.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM",
      services: [
        "Early Intervention (0–6 Years)",
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
    <div className="min-h-screen bg-slate-50 flex flex-col">


      {/* HERO */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-6">
        <motion.div
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Centres
          </h1>

          <p className="text-lg opacity-90">
            Visit us to experience the Panksh CARE difference and see how our
            inclusive environment supports every child’s development.
          </p>
        </motion.div>
      </section>


      {/* CENTRES LIST */}
      <section className="py-20 px-6 flex-1">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 mb-16">

            {centres.map((centre, index) => (

              <motion.div
                key={index}
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                whileHover={{y:-6}}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border"
              >

                {/* TOP HEADER */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 text-center border-b">

                  <div className="text-6xl mb-4">
                    {centre.image}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800">
                    {centre.name}
                  </h3>

                </div>


                {/* BODY */}
                <div className="p-8 space-y-6">

                  {/* CONTACT */}
                  <div className="space-y-4">

                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Address</p>
                        <p className="text-sm text-slate-600">{centre.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-teal-500 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Phone</p>
                        <p className="text-sm text-slate-600">{centre.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-teal-500 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-sm text-slate-600">{centre.email}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-teal-500 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Hours</p>
                        <p className="text-sm text-slate-600">{centre.hours}</p>
                      </div>
                    </div>

                  </div>


                  {/* SERVICES */}
                  <div className="pt-4 border-t">

                    <p className="font-semibold text-slate-800 mb-3">
                      Services Available
                    </p>

                    <ul className="space-y-2">

                      {centre.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                          {service}
                        </li>
                      ))}

                    </ul>

                  </div>


                  {/* BUTTON */}
                  <Link to="/contact">
                    <Button className="w-full mt-4">
                      Schedule a Visit
                    </Button>
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>


          {/* EXPANSION SECTION */}
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-10 text-center"
          >

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Expanding to Your City
            </h3>

            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Panksh CARE is growing across cities. If you are interested in
              bringing our early intervention and inclusive education programs
              to your area, we would love to explore partnership opportunities.
            </p>

            <Link to="/franchise">
              <Button variant="secondary">
                Learn About Franchise Opportunities
              </Button>
            </Link>

          </motion.div>

        </div>

      </section>


      {/* VISIT EXPERIENCE */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-50 to-blue-50">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            What to Expect During Your Visit
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Facility Tour",
                description:
                  "Explore our classrooms, therapy rooms, and learning spaces designed for child development.",
                emoji: "🏢",
              },
              {
                title: "Meet the Team",
                description:
                  "Interact with our educators, therapists, and specialists dedicated to supporting every child.",
                emoji: "👥",
              },
              {
                title: "Consultation",
                description:
                  "Discuss your child's needs and explore how our programs can support their growth.",
                emoji: "💬",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:index*0.1}}
                viewport={{once:true}}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >

                <div className="text-4xl mb-4">
                  {item.emoji}
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Visit?
        </h2>

        <p className="mb-8 opacity-90">
          Schedule your personalized tour and consultation today.
        </p>

        <Link to="/contact">
          <Button variant="secondary">
            Schedule Your Visit
          </Button>
        </Link>

      </section>

<Footer/>
    </div>
  )
}
