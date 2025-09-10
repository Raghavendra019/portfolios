export default function Projects() {
  const projects = [
    { title: "Duotax", desc: "Property valuation platform using Node.js & Salesforce integration." },
    { title: "Eventzalley", desc: "Event management platform with ticketing, analytics & WhatsApp integration." },
  ]

  return (
    <section id="projects" className="py-20 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
