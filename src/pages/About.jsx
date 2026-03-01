import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const inclusionAreas = [
    "Neurotypical children",
    "Children with developmental delays",
    "Autism spectrum conditions",
    "Speech & communication challenges",
    "Behavioural & emotional regulation concerns",
    "Learning differences",
  ];

  const coreFocus = [
    "Strong communication skills",
    "Emotional regulation",
    "Social confidence",
    "Cognitive foundations",
    "Independence in routine",
    "Smooth transition to mainstream or inclusive schools",
  ];

  const differentiation = [
    {
      icon: "🎓",
      title: "Education + Intervention Integrated",
      description:
        "Therapeutic strategies are embedded within classroom routines — not isolated outside them.",
    },
    {
      icon: "👥",
      title: "Individual Attention Within Group Learning",
      description:
        "Every child receives structured guidance while learning in a social environment.",
    },
    {
      icon: "🏠",
      title: "Sensory-Aware & Emotion-Safe Spaces",
      description:
        "Our environment is calm, structured, and responsive to children's needs.",
    },
    {
      icon: "🤝",
      title: "Parent Partnership Model",
      description:
        "Regular reviews, structured feedback, and guidance sessions ensure families grow with the child.",
    },
  ];

  const globalApproach = [
    "Finland's wellbeing-first early education model",
    "UK's Early Years Foundation Stage (EYFS)",
    "Ireland's Aistear framework",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Panksh CARE</h1>
          <p className="text-lg opacity-90">
            Building a generation of confident, secure, and capable children.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Panksh Care – Early Learning & Intervention School is an inclusive
              early years institution where education and developmental
              understanding come together.
            </p>
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Inspiration – Prakhar's Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              Prakhar is the heart and inspiration behind Panksh Care. Born as a
              special child, Prakhar faced early developmental challenges.
            </p>
            <p className="font-semibold text-primary">
              "If Prakhar can do it, any child can—with the right support and
              belief."
            </p>
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            An Inclusive School for All Children
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {inclusionAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-accent shadow-sm">
            Inclusion here is not an add-on. It is our foundation.
          </div>
        </div>
      </section>

      {/* Core Focus */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Our Core Focus: School Readiness
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {coreFocus.map((focus, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">✓</span>
                </div>
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            How We Are Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiation.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Globally Inspired. Indian at Heart.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {globalApproach.map((approach, index) => (
              <div
                key={index}
                className="bg-secondary/10 rounded-lg p-6 border"
              >
                <Globe className="w-8 h-8 text-primary mb-3" />
                <p className="font-medium">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-secondary text-primary font-bold">
                Book a School Tour
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
