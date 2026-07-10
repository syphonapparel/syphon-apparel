export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            About Syphon Apparel
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Manufacturing Apparel With
            <span className="text-green-700"> Precision & Trust</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Based in Sialkot, Pakistan, Syphon Apparel partners with
            individuals, fashion brands, wholesalers, sports teams,
            and global e-commerce businesses to manufacture premium
            apparel with consistent quality, faster sampling,
            transparent communication, and reliable worldwide shipping.
          </p>

          <div className="mt-10 grid gap-5">

            <div className="flex items-center gap-4">
              <div className="text-2xl">✔</div>
              <span className="text-lg font-medium">
                Premium Quality Manufacturing
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">✔</div>
              <span className="text-lg font-medium">
                Fast Product Sampling
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">✔</div>
              <span className="text-lg font-medium">
                Better Communication
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">✔</div>
              <span className="text-lg font-medium">
                Worldwide Shipping
              </span>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex h-[500px] items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-white shadow-xl">

          <div className="text-center">
            <div className="text-7xl">🏭</div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Factory Image
            </h3>

            <p className="mt-3 text-gray-600">
              We'll replace this with a professional manufacturing
              photograph in the next step.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}