// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, Globe } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function AboutFull() {
//   const inclusionAreas = [
//     "Neurotypical children",
//     "Children with developmental delays",
//     "Autism spectrum conditions",
//     "Speech & communication challenges",
//     "Behavioural & emotional regulation concerns",
//     "Learning differences",
//   ];

//   const coreFocus = [
//     "Strong communication skills",
//     "Emotional regulation",
//     "Social confidence",
//     "Cognitive foundations",
//     "Independence in routine",
//     "Smooth transition to mainstream or inclusive schools",
//   ];

//   const differentiation = [
//     {
//       icon: "🎓",
//       title: "Education + Intervention Integrated",
//       description:
//         "Therapeutic strategies are embedded within classroom routines — not isolated outside them.",
//     },
//     {
//       icon: "👥",
//       title: "Individual Attention Within Group Learning",
//       description:
//         "Every child receives structured guidance while learning in a social environment.",
//     },
//     {
//       icon: "🏠",
//       title: "Sensory-Aware & Emotion-Safe Spaces",
//       description:
//         "Our environment is calm, structured, and responsive to children's needs.",
//     },
//     {
//       icon: "🤝",
//       title: "Parent Partnership Model",
//       description:
//         "Regular reviews, structured feedback, and guidance sessions ensure families grow with the child.",
//     },
//   ];

//   const globalApproach = [
//     "Finland's wellbeing-first early education model",
//     "UK's Early Years Foundation Stage (EYFS)",
//     "Ireland's Aistear framework",
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* <Navbar /> */}
//       {/* <Header /> */}

//       {/* Hero */}
//       <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           {/* <h1 className="text-4xl md:text-5xl font-bold">About Panksh CARE</h1> */}
//           <p className="text-lg opacity-90">
//             Building a generation of confident, secure, and capable children.
//           </p>
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <div>
//             <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
//             <p className="text-muted-foreground leading-relaxed mb-4">
//               Panksh Care – Early Learning & Intervention School is an inclusive
//               early years institution where education and developmental
//               understanding come together.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary">
//             <h3 className="text-2xl font-bold text-primary mb-4">
//               Our Inspiration – Prakhar's Journey
//             </h3>
//             <p className="text-muted-foreground mb-4">
//               Prakhar is the heart and inspiration behind Panksh Care. Born as a
//               special child, Prakhar faced early developmental challenges.
//             </p>
//             <p className="font-semibold text-primary">
//               "If Prakhar can do it, any child can—with the right support and
//               belief."
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Inclusion */}
//       <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-primary mb-6">
//             An Inclusive School for All Children
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4 mb-8">
//             {inclusionAreas.map((area, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <CheckCircle className="w-5 h-5 text-accent mt-1" />
//                 <span>{area}</span>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-lg p-6 border-l-4 border-accent shadow-sm">
//             Inclusion here is not an add-on. It is our foundation.
//           </div>
//         </div>
//       </section>

//       {/* Core Focus */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-primary mb-6">
//             Our Core Focus: School Readiness
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             {coreFocus.map((focus, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
//                   <span className="text-xs font-bold text-primary">✓</span>
//                 </div>
//                 <span>{focus}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Differentiation */}
//       <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-primary mb-12 text-center">
//             How We Are Different
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {differentiation.map((item, index) => (
//               <div key={index} className="bg-white rounded-lg p-8 shadow-md">
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="font-bold text-primary mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Global */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-primary mb-6">
//             Globally Inspired. Indian at Heart.
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6 mb-8">
//             {globalApproach.map((approach, index) => (
//               <div
//                 key={index}
//                 className="bg-secondary/10 rounded-lg p-6 border"
//               >
//                 <Globe className="w-8 h-8 text-primary mb-3" />
//                 <p className="font-medium">{approach}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision CTA */}
//       {/* <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">Our Vision</h2>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact">
//               <Button className="bg-secondary text-primary font-bold">
//                 Book a School Tour
//               </Button>
//             </Link>

//             <Link to="/contact">
//               <Button variant="outline">Schedule a Consultation</Button>
//             </Link>
//           </div>
//         </div>
//       </section> */}

//       {/* <Footer /> */}
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function AboutFull() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Who We Are
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            <strong>Panksh Care – Early Learning & Intervention School</strong>{" "}
            is an inclusive early years institution where education and
            developmental understanding come together.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            We are an institution built for all children —{" "}
            <span className="font-semibold">
              neurotypical and neurodivergent
            </span>{" "}
            — who deserve a strong, confident start to their learning journey.
          </p>
        </motion.div>

        {/* PRAKHAR STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-10 md:p-14"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Our Inspiration – Prakhar’s Journey
          </h3>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              <strong>Prakhar</strong> is the heart and inspiration behind
              Panksh Care.
            </p>

            <p>
              Born as a special child, Prakhar faced early developmental
              challenges. What made the difference was not luck or shortcuts —
              but the
              <span className="font-semibold">
                {" "}
                unshakeable belief, guidance, and continuous support of his
                parents.
              </span>
            </p>

            <p>
              His mother and father stood beside him at every stage,
              understanding his needs, nurturing his abilities, and never giving
              up on his potential.
            </p>

            <p>
              With patience, discipline, and strong parental guidance, Prakhar
              discovered his passion for{" "}
              <span className="font-semibold">Table Tennis</span>. Step by step,
              he transformed challenges into strength.
            </p>

            <p className="font-semibold text-slate-900">
              Today, Prakhar is an International Table Tennis Player and proudly
              ranks among the Top 5 players at the National level.
            </p>
          </div>

          {/* QUOTE */}
          <div className="mt-10 border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-md">
            <p className="text-xl font-semibold text-slate-900 italic">
              “If Prakhar can do it, any child can — with the right support and
              belief.”
            </p>
          </div>

          {/* FINAL MESSAGE */}
          <div className="mt-10 space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              This belief became the motivation for his mother to start
              <strong> Panksh Care</strong> — with a clear mission to help,
              guide, and support every special child out there, just as she once
              did for her own son.
            </p>

            <p className="font-semibold text-slate-900 text-xl">
              Panksh Care stands as a promise that no child’s potential should
              ever be underestimated.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
