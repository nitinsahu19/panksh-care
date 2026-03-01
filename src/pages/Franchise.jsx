import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { CheckCircle, Lightbulb } from "lucide-react"

export default function Franchise() {
  const benefits = [
    "Established Institutional Model - A structured and field-tested Early Intervention and Inclusive Education framework",
    "Integrated Academic & Therapeutic Ecosystem - School Readiness, Therapy, NIOS, and Vocational Training under one structure",
    "Complete Training & Governance Support - Institution setup guidance, staff training, operational manuals",
    "Standardised Curriculum & Assessment Framework - Structured developmental tracking with transition planning",
    "Brand & System Support - Operational SOPs, admission systems, marketing tools, and review protocols",
    "Purpose with Sustainability - Create meaningful social impact while building a stable institution",
  ]

  const partnerRequirements = [
    "Background in education, therapy, or rehabilitation",
    "Belief in structured inclusive education",
    "Commitment to hands-on leadership",
    "Value quality, compliance, and long-term growth",
    "Wish to build an institution — not just operate a facility",
  ]

  const focusAreas = [
    "Early Intervention (0–6 years)",
    "Inclusive School Readiness Programs",
    "Occupational & Speech Therapy",
    "Behavioural Support Services",
    "NIOS Academic Guidance",
    "Vocational & Skill Development Pathways",
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Become a Panksh CARE Franchise Partner
          </h1>
          <p className="text-lg opacity-90">
            Establish an Institution. Create Impact. Build a Purpose-Driven Legacy.
          </p>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              The Opportunity
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Panksh CARE is expanding. We invite committed educators,
              therapists, and social entrepreneurs to partner with us in
              establishing structured, therapy-integrated institutions
              dedicated to Early Intervention, Inclusive Learning,
              Therapeutic Support, NIOS Guidance, and Vocational Development.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With strong operational systems and a clearly defined
              academic-therapeutic framework, Panksh CARE ensures measurable
              child outcomes and sustainable institutional growth.
            </p>
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Institutional Framework Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Partner With Panksh CARE?
          </h2>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mt-1">
                  <span className="text-sm font-bold text-primary">✓</span>
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Seek */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Who Can Establish a Panksh CARE Institution?
          </h2>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
            <p className="text-foreground/80 leading-relaxed mb-6">
              We seek mission-aligned partners committed to building
              institutions — not just operating facilities.
            </p>

            <div className="space-y-3">
              {partnerRequirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-accent mt-1" />
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed mt-6 italic">
              This is not a passive investment opportunity. It is a
              mission-aligned institutional partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Expand With Purpose
          </h2>

          <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Bring Panksh CARE to your city and become part of a growing
            network of structured developmental institutions.
          </p>

          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <p className="font-semibold text-primary mb-6">
              Together, we can build institutions that:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Identify early",
                "Intervene structurally",
                "Educate inclusively",
                "Empower sustainably",
              ].map((goal, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded p-4"
                >
                  <p className="font-semibold text-primary">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Make an Impact?
        </h2>

        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Connect with us to explore institutional franchise opportunities.
        </p>

        <Link to="/contact">
          <Button variant="secondary">
            Start the Conversation
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}