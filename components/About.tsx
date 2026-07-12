export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1A1A1A] py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-4 py-2 text-sm font-semibold text-[#00E676]">
            About Syphon Apparel
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Manufacturing Apparel With
            <span className="text-[#00C853]"> Precision & Trust</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Based in Sialkot, Pakistan, Syphon Apparel partners with
            startups, fashion brands, wholesalers, sports teams and
            global businesses to manufacture premium apparel with
            reliable quality, transparent communication and worldwide
            delivery.
          </p>

          <div className="mt-10 grid gap-4">

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#222222] p-4 transition hover:border-[#00C853]">
              <div className="text-2xl text-[#00C853]">✓</div>
              <span className="font-medium text-white">
                Premium Quality Manufacturing
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#222222] p-4 transition hover:border-[#00C853]">
              <div className="text-2xl text-[#00C853]">✓</div>
              <span className="font-medium text-white">
                Fast Product Sampling
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#222222] p-4 transition hover:border-[#00C853]">
              <div className="text-2xl text-[#00C853]">✓</div>
              <span className="font-medium text-white">
                Better Communication
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-[#222222] p-4 transition hover:border-[#00C853]">
              <div className="text-2xl text-[#00C853]">✓</div>
              <span className="font-medium text-white">
                Worldwide Shipping
              </span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex h-[500px] items-center justify-center rounded-3xl border border-zinc-800 bg-[#222222] shadow-2xl">

          <div className="px-10 text-center">

            <div className="mb-8 text-7xl">
              👕
            </div>

            <h3 className="text-3xl font-bold text-white">
              Product Showcase
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              This space will soon feature premium mockups and real
              product photography of Syphon Apparel's collections,
              including hoodies, t-shirts, tracksuits, racing wear,
              and leather jackets.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}