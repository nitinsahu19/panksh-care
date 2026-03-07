// import { motion } from "framer-motion"
// import {
//   Heart, Brain, Users, ShieldCheck, Globe, Sparkles
// } from "lucide-react"

// const reasons = [
//   {
//     icon: Heart,
//     title: "More Than a School. More Than Therapy.",
//     desc: "We integrate structured learning with therapeutic understanding."
//   },
//   {
//     icon: Brain,
//     title: "Strong School Readiness Foundation",
//     desc: "Listening, attention, emotional regulation, independence."
//   },
//   {
//     icon: Sparkles,
//     title: "Early Intervention Advantage",
//     desc: "Support during the most critical brain development years (2–6 years)."
//   },
//   {
//     icon: ShieldCheck,
//     title: "Individualised Learning Plans",
//     desc: "Every child is unique — no one-size-fits-all approach."
//   },
//   {
//     icon: Users,
//     title: "Small Groups, Safe Environment",
//     desc: "Close guidance in a calm, nurturing space."
//   },
//   {
//     icon: Heart,
//     title: "Parent Partnership & Guidance",
//     desc: "We walk with families, not just teach children."
//   },
//   {
//     icon: Globe,
//     title: "Global Thinking, Indian Understanding",
//     desc: "International best practices adapted to Indian classrooms."
//   }
// ]

// export const WhyChoose = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-bold text-center mb-6"
//         >
//           Why Parents Choose Panksh CARE?
//         </motion.h2>

//         <motion.div 
//           className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.15 }
//             }
//           }}
//         >
//           {reasons.map((item, index) => {
//             const Icon = item.icon
//             return (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 50 },
//                   visible: { opacity: 1, y: 0 }
//                 }}
//                 transition={{ duration: 0.6 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-slate-800/60 backdrop-blur border border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-all"
//               >
//                 <Icon className="w-10 h-10 text-teal-400 mb-4" />
//                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                 <p className="text-gray-300 text-sm">{item.desc}</p>
//               </motion.div>
//             )
//           })}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Brain, Users, ShieldCheck, Globe, Sparkles } from "lucide-react"

const data = [
  { icon: Heart, title: "More Than a School. More Than Therapy.", desc: "We integrate structured learning with therapeutic understanding." },
  { icon: Brain, title: "Strong School Readiness Foundation", desc: "Listening, attention, emotional regulation, independence." },
  { icon: Sparkles, title: "Early Intervention Advantage", desc: "Support during the most critical brain development years (2–6 years)." },
  { icon: ShieldCheck, title: "Individualised Learning Plans", desc: "Every child is unique — no one-size-fits-all approach." },
  { icon: Users, title: "Small Groups, Safe Environment", desc: "Close guidance in a calm, nurturing space." },
  { icon: Heart, title: "Parent Partnership & Guidance", desc: "We walk with families, not just teach children." },
  { icon: Globe, title: "Global Thinking, Indian Understanding", desc: "International best practices adapted to Indian classrooms and family values." },
]

export default function WhyChoose() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  // return (
  //   <section ref={ref} className="py-28 bg-slate-900 text-white">
  //     <div className="max-w-7xl mx-auto px-6">

  //       <motion.h2
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6 }}
  //         className="text-5xl font-bold text-center mb-16"
  //       >
  //         Why Parents Choose Panksh CARE?
  //       </motion.h2>

  //       <motion.div
  //         variants={container}
  //         initial="hidden"
  //         animate={isInView ? "visible" : "hidden"}
  //         className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
  //       >
  //         {data.map((item, i) => {
  //           const Icon = item.icon

  //           return (
  //             <motion.div
  //               key={i}
  //               variants={card}
  //               transition={{ duration: 0.5 }}
  //               whileHover={{ scale: 1.05 }}
  //               className="bg-slate-800/60 backdrop-blur border border-slate-700 p-6 rounded-2xl"
  //             >
  //               <Icon className="w-10 h-10 text-teal-400 mb-4" />

  //               <h3 className="font-semibold mb-2">
  //                 {item.title}
  //               </h3>

  //               <p className="text-gray-300 text-sm">
  //                 {item.desc}
  //               </p>
  //             </motion.div>
  //           )
  //         })}
  //       </motion.div>

  //     </div>
  //   </section>
  // )
}