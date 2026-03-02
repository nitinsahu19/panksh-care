const steps = [
  "Monthly Development Goals Across 7 Domains",
  "Objective School Readiness Assessment",
  "Readiness Pathways A–D",
  "Transition Planning with Parents"
]

export const SchoolReadinessTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          How Our School Readiness Program Works
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-teal-600 text-white flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}