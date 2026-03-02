import { motion } from "framer-motion"
import { Sparkles, HeartHandshake } from "lucide-react"

export default function AboutFull() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-slate-900"
        >
          About Panksh Care
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6 text-lg leading-relaxed text-slate-700"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Founded by <strong>Dr. Sonika Sharma</strong>, Child Psychologist and Founder of Divit Child Development Centre, 
              Panksh Care was born after years of deep, hands-on experience working with children across diverse developmental profiles.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Through clinical practice and classroom observation, we recognized a crucial gap:
              some children needed structured early foundations, some required specialised developmental support,
              and all deserved understanding without labels.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white border-l-4 border-teal-500 shadow-md rounded-xl p-6"
            >
              <p className="font-semibold text-slate-900 text-xl">
                Panksh Care bridges education and early intervention.
              </p>
              <p className="mt-2 text-slate-600">
                We have built a structured school readiness ecosystem where learning and therapeutic understanding work together seamlessly — inside the classroom, not outside it.
              </p>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Our model ensures that children are not separated by diagnosis or difficulty.
              Instead, support is embedded naturally within structured learning,
              preserving dignity while promoting measurable growth.
            </motion.p>
          </motion.div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 p-10 rounded-3xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="w-10 h-10 text-teal-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Our Core Belief
              </h3>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Every child has potential — but potential flourishes only in environments that combine structure, understanding, and intentional support.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <HeartHandshake className="w-8 h-8 text-blue-600" />
              <p className="text-slate-800 font-semibold">
                Inclusion is not an add-on at Panksh Care.  
                It is our foundation.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl font-semibold text-slate-900 leading-relaxed">
            We are not building just a school.
          </p>
          <p className="text-xl text-slate-600 mt-2">
            We are building a structured beginning where confidence, emotional security,
            and developmental readiness grow together.
          </p>
        </motion.div>

      </div>
    </section>
  )
}





// import { motion } from "framer-motion"
// import { Heart, Sparkles, Users } from "lucide-react"

// export default function AboutFull() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold text-slate-900 mb-6">
//             About Panksh Care
//           </h2>
//           <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full" />
//         </motion.div>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6 text-slate-700 leading-relaxed text-lg"
//           >
//             <p>
//               Founded by <span className="font-semibold text-slate-900">
//               Dr. Sonika Sharma</span>, Child Psychologist and Founder of 
//               Divit Child Development Centre, Panksh Care was created after 
//               years of working closely with children across diverse developmental profiles.
//             </p>

//             <p>
//               Over time, we recognised a critical gap in early education.
//               Some children needed structured foundations.
//               Some required specialised intervention.
//               But every child needed understanding, dignity, and the right environment.
//             </p>

//             <p className="font-semibold text-slate-900">
//               Panksh Care bridges education and early intervention —
//               building a school readiness ecosystem where structured learning
//               and therapeutic understanding work together seamlessly.
//             </p>

//             <div className="pt-6 border-t border-slate-200">
//               <p className="italic text-slate-600">
//                 We do not separate children by labels.  
//                 We support them by strengths.
//               </p>
//             </div>
//           </motion.div>

//           {/* Right Highlight Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
//             className="bg-white shadow-2xl rounded-3xl p-10 border border-slate-100"
//           >
//             <div className="space-y-8">

//               <div className="flex items-start gap-4">
//                 <Heart className="text-teal-500 w-8 h-8 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-xl text-slate-900">
//                     Inclusion is Our Foundation
//                   </h3>
//                   <p className="text-slate-600 mt-2">
//                     Neurotypical and neurodivergent children learn together —
//                     in structured, emotionally safe classrooms.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Users className="text-teal-500 w-8 h-8 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-xl text-slate-900">
//                     Parent Partnership Model
//                   </h3>
//                   <p className="text-slate-600 mt-2">
//                     Families are active collaborators in developmental planning
//                     and transition decisions.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Sparkles className="text-teal-500 w-8 h-8 mt-1" />
//                 <div>
//                   <h3 className="font-bold text-xl text-slate-900">
//                     Structured + Compassionate
//                   </h3>
//                   <p className="text-slate-600 mt-2">
//                     Systems built on science. Care built on empathy.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </motion.div>

//         </div>

//         {/* Bottom Mission Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-12 rounded-3xl shadow-xl text-center"
//         >
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Our Mission
//           </h3>
//           <p className="text-lg max-w-3xl mx-auto leading-relaxed">
//             To create emotionally secure, developmentally supported, and
//             school-ready children — who move forward confidently,
//             without stigma, without comparison, and without limitation.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   )
// }