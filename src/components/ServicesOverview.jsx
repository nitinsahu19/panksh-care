export default function ServicesOverview() {
  const services = [
    "Early Intervention School (0–6 Years)",
    "Speech and Language Therapy",
    "Occupational Therapy",
    "Sensory Support",
    "Physical Therapy",
    "Developmental Play-Based Therapy",
    "Parent Coaching & Family Support",
    "Day Care | Individual Care & Development Hub",
    "Academic Support (NIOS)",
    "Training Programs – Arts, Sports, Yoga, Vocational Skills"
  ]

  return (
    <section className="py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              {s}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}