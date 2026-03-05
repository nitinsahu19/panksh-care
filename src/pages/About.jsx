import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Heart } from "lucide-react";
import { Sparkles, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            About Panksh Care
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-700 leading-relaxed text-lg"
          >
            <p>
              Founded by{" "}
              <span className="font-semibold text-slate-900">
                Dr. Sonika Sharma
              </span>
              , Child Psychologist and Founder of Divit Child Development
              Centre, Panksh Care was created after years of working closely
              with children across diverse developmental profiles.
            </p>

            <p>
              Over time, we recognised a critical gap in early education. Some
              children needed structured foundations. Some required specialised
              intervention. But every child needed understanding, dignity, and
              the right environment.
            </p>

            <p className="font-semibold text-slate-900">
              Panksh Care bridges education and early intervention — building a
              school readiness ecosystem where structured learning and
              therapeutic understanding work together seamlessly.
            </p>

            <div className="pt-6 border-t border-slate-200">
              <p className="italic text-slate-600">
                We do not separate children by labels. We support them by
                strengths.
              </p>
            </div>
          </motion.div>

          {/* Right Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-2xl rounded-3xl p-10 border border-slate-100"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Heart className="text-teal-500 w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Inclusion is Our Foundation
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Neurotypical and neurodivergent children learn together — in
                    structured, emotionally safe classrooms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="text-teal-500 w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Parent Partnership Model
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Families are active collaborators in developmental planning
                    and transition decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sparkles className="text-teal-500 w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-slate-900">
                    Structured + Compassionate
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Systems built on science. Care built on empathy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Mission Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-12 rounded-3xl shadow-xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            To create emotionally secure, developmentally supported, and
            school-ready children — who move forward confidently, without
            stigma, without comparison, and without limitation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
