// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   Heart,
//   Brain,
//   Users,
//   ShieldCheck,
//   Globe,
//   Sparkles,
//   ArrowRight,
//   ChevronDown,
// } from "lucide-react"

// export default function Home() {
//   const [openIndex, setOpenIndex] = useState(null)

//   const reasons = [
//     {
//       icon: Heart,
//       title: "More Than a School. More Than Therapy.",
//       desc: "We integrate structured learning with therapeutic understanding.",
//     },
//     {
//       icon: Brain,
//       title: "Strong School Readiness Foundation",
//       desc: "Listening, attention, emotional regulation, independence.",
//     },
//     {
//       icon: Sparkles,
//       title: "Early Intervention Advantage",
//       desc: "Support during the most critical brain development years (2–6 years).",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Individualised Learning Plans",
//       desc: "Every child is unique — no one-size-fits-all approach.",
//     },
//     {
//       icon: Users,
//       title: "Small Groups, Safe Environment",
//       desc: "Close guidance in a calm, nurturing space.",
//     },
//     {
//       icon: Heart,
//       title: "Parent Partnership & Guidance",
//       desc: "We walk with families, not just teach children.",
//     },
//     {
//       icon: Globe,
//       title: "Global Thinking, Indian Understanding",
//       desc: "International best practices adapted to Indian classrooms.",
//     },
//   ]

//   return (
//     <div className="overflow-hidden">

//       {/* HERO */}
//       <section className="h-screen bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-6xl font-bold mb-6">
//             Empowering Every Child
//           </h1>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Inclusive Early Learning. Structured Intervention. Confident Futures.
//           </p>
//           <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition flex items-center gap-2 mx-auto">
//             Book a School Tour <ArrowRight size={20} />
//           </button>
//         </motion.div>
//       </section>

//       {/* WHY CHOOSE */}
//       <section className="py-28 bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl font-bold text-center mb-16"
//           >
//             Why Parents Choose Panksh CARE?
//           </motion.h2>

//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.15 } },
//             }}
//           >
//             {reasons.map((item, index) => {
//               const Icon = item.icon
//               return (
//                 <motion.div
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0, y: 50 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-slate-800/60 backdrop-blur border border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-all"
//                 >
//                   <Icon className="w-10 h-10 text-teal-400 mb-4" />
//                   <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                   <p className="text-gray-300 text-sm">{item.desc}</p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="py-28 bg-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h2 className="text-4xl font-bold mb-6">
//               About Panksh Care
//             </h2>
//             <p className="text-lg text-slate-700 leading-relaxed">
//               Founded by Dr. Sonika Sharma, Panksh Care bridges education and early
//               intervention — creating a school readiness ecosystem where learning
//               and support work together seamlessly.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="bg-gradient-to-br from-teal-100 to-blue-100 p-10 rounded-3xl shadow-xl"
//           >
//             <p className="text-xl font-semibold text-slate-800">
//               Inclusion here is not an add-on.  
//               It is our foundation.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* INTERACTIVE FAQ STYLE SECTION */}
//       <section className="py-28 bg-gradient-to-r from-blue-50 to-teal-50">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             School Readiness Model
//           </h2>

//           {[
//             "Monthly Development Goals Across 7 Domains",
//             "Objective School Readiness Assessment",
//             "Pathway-Based Transition Planning",
//             "Parent Partnership in Every Step",
//           ].map((item, index) => (
//             <div key={index} className="mb-6 border-b pb-4">
//               <button
//                 onClick={() =>
//                   setOpenIndex(openIndex === index ? null : index)
//                 }
//                 className="flex justify-between w-full text-left font-semibold text-lg"
//               >
//                 {item}
//                 <ChevronDown
//                   className={`transition-transform ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {openIndex === index && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="mt-3 text-slate-600"
//                 >
//                   Structured, measurable, child-focused progression ensures
//                   confident school transition.
//                 </motion.p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FRANCHISE SECTION */}
//       <section className="py-28 bg-slate-900 text-white text-center">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-5xl font-bold mb-6"
//         >
//           Become a Panksh CARE Franchise Partner
//         </motion.h2>

//         <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
//           Establish an Institution. Create Impact. Build a Purpose-Driven Legacy.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="bg-teal-500 hover:bg-teal-400 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition"
//         >
//           Explore Institutional Partnership
//         </motion.button>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center">
//         <motion.h2
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-6"
//         >
//           Begin Your Child’s Journey With Us
//         </motion.h2>

//         <div className="flex justify-center gap-6 flex-wrap">
//           <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
//             Book a School Tour
//           </button>
//           <button className="border border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition">
//             Schedule Consultation
//           </button>
//         </div>
//       </section>

//     </div>
//   )
// }


import HeroSection from "../components/HeroSection"
import WhyChoose from "../components/WhyChoose"
import AboutFull from "../components/AboutFull"
import InclusiveSection from "../components/InclusiveSection"
import ServicesOverview from "../components/ServicesOverview"
import FranchiseFull from "../components/FranchiseFull"
import FinalCTA from "../components/FinalCTA"
import HeroSlider from "@/components/HeroSlider"

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSlider/>
      <WhyChoose />
      <AboutFull />
      <InclusiveSection />
      <ServicesOverview />
      <FranchiseFull />
      <FinalCTA />
    </>
  )
}