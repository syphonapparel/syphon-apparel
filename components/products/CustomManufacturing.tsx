export default function CustomManufacturing() {
  const features = [
    "Fully Custom Designs",
    "Private Label Manufacturing",
    "Custom Fabrics & Materials",
    "Embroidery & Printing",
    "Low & Bulk Order Quantities",
    "Worldwide Shipping",
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#181818] via-[#1D1D1D] to-[#252525] p-10 shadow-2xl md:p-16">

      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
            Custom Manufacturing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Need Something Unique?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Don't see the product you're looking for? No problem.
            We specialize in manufacturing apparel tailored to your
            exact specifications, branding, fabrics, trims,
            packaging and production requirements.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="group rounded-2xl border border-zinc-800 bg-[#202020] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853]/50 hover:bg-[#242424] hover:shadow-[0_0_20px_rgba(0,200,83,0.15)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#00C853]/15 text-xl text-[#00E676]">
                ✓
              </div>

              <h3 className="text-lg font-semibold text-white">
                {feature}
              </h3>
            </div>
          ))}

        </div>

        <div className="mt-16 rounded-3xl border border-[#00C853]/20 bg-[#111111] p-8 text-center">

          <h3 className="text-3xl font-bold text-white">
            Have a Product in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-400">
            Whether you're launching a new clothing brand or expanding
            your existing collection, Syphon Apparel is ready to
            manufacture products built around your exact vision.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[#00C853] px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#00E676]"
          >
            Request a Quote
          </a>

        </div>

      </div>

    </section>
  );
}