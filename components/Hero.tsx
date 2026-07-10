export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-gray-100 to-green-50">
      {/* Background Decoration */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-green-300/20 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <span className="mb-6 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
          Premium Apparel Manufacturing
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-[#333333] md:text-7xl">
          Crafting Quality Apparel
          <span className="block text-[#2E7D32]">
            For Global Brands
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          Syphon Apparel partners with startups, established brands,
          wholesalers, sports teams, and e-commerce businesses to manufacture
          premium clothing, racing gear, leather jackets, and custom apparel.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-full bg-[#2E7D32] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-700">
            Request a Quote
          </button>

          <button className="rounded-full border-2 border-[#2E7D32] px-8 py-4 font-semibold text-[#2E7D32] transition hover:bg-[#2E7D32] hover:text-white">
            Explore Products
          </button>

        </div>

      </div>
    </section>
  );
}