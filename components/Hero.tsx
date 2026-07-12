export default function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#111111] via-[#1B1B1B] to-[#242424] pt-32">

      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#00C853]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#00C853]/10 blur-3xl"></div>

      {/* Subtle Grid */}
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <span className="mb-6 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
          Premium Apparel Manufacturing
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Manufacturing Apparel
          <span className="block text-[#00C853]">
            Built For Your Brand
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Syphon Apparel partners with startups, established brands,
          wholesalers, sports teams, and e-commerce businesses to manufacture
          premium clothing, racing gear, leather jackets, and custom apparel
          with reliable quality and worldwide delivery.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-full bg-[#00C853] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#00E676]">
            Request a Quote
          </button>

          <button className="rounded-full border border-[#00C853] px-8 py-4 font-semibold text-[#00C853] transition duration-300 hover:bg-[#00C853] hover:text-black">
            Explore Products
          </button>

        </div>

      </div>
    </section>
  );
}