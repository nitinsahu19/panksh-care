export default function InclusiveSection() {
  const list = [
    "Neurotypical children",
    "Children with developmental delays",
    "Autism spectrum conditions",
    "Speech & communication challenges",
    "Behavioural & emotional regulation concerns",
    "Learning differences",
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          An Inclusive School for All Children
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {list.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}