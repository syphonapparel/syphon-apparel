export default function CTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#1A1A1A] via-[#1E1E1E] to-[#252525] p-12 md:p-16">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C853]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl text-center">

        <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
          Let's Build Together
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          Ready to Bring Your
          <span className="block text-[#00C853]">
            Apparel Vision to Life?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Whether you're launching a new brand, expanding your product line,
          or searching for a reliable manufacturing partner, we're here to
          transform your ideas into premium-quality apparel delivered worldwide.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#contact"
            className="rounded-full bg-[#00C853] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#00E676]"
          >
            Request a Quote
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#00C853] px-8 py-4 font-semibold text-[#00C853] transition-all duration-300 hover:bg-[#00C853] hover:text-black"
          >
            Contact Us
          </a>

        </div>

      </div>

    </section>
  );
}