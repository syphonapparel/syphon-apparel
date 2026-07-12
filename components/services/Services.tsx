import ProcessSteps from "./ProcessSteps";
import CTA from "./CTA";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111111] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
            How We Work
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            From Concept
            <span className="block text-[#00C853]">
              to Global Delivery
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We simplify apparel manufacturing through a proven process,
            guiding your project from the first idea to worldwide delivery
            with transparency, precision, and consistent quality.
          </p>

        </div>

        {/* Manufacturing Process */}
        <ProcessSteps />

        {/* CTA */}
        <CTA />

      </div>
    </section>
  );
}