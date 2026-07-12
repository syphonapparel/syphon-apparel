const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Share your ideas, product requirements, branding, fabrics, order quantities, and project goals with our team.",
  },
  {
    number: "02",
    title: "Design & Sampling",
    description:
      "We develop samples based on your specifications, allowing you to review and approve every detail before production.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Your collection is produced using premium materials, skilled craftsmanship, and modern manufacturing techniques.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Every garment is carefully inspected to ensure consistent quality, accurate sizing, and flawless finishing.",
  },
  {
    number: "05",
    title: "Packaging & Shipping",
    description:
      "Products are packed according to your branding requirements and shipped safely to destinations worldwide.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="mb-24">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {steps.map((step) => (

          <div
            key={step.number}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#1A1A1A] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#00C853]/50 hover:shadow-[0_0_30px_rgba(0,200,83,0.15)]"
          >

            {/* Accent Line */}
            <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#00C853] transition-transform duration-500 group-hover:scale-x-100"></div>

            {/* Step Number */}
            <div className="mb-6 text-6xl font-black leading-none text-zinc-800 transition-all duration-500 group-hover:text-[#00C853]/30">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-[#00E676]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-5 leading-8 text-zinc-400">
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}