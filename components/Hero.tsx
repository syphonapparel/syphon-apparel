import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] pt-32 pb-20">

      {/* Background Glow */}
      <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#00C853]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00C853]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}

        <div className="max-w-2xl text-center lg:text-left">

          <span className="inline-flex items-center rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] text-[#00E676] uppercase">
            Premium Apparel Manufacturing
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-7xl">
            Your Vision.
            <br />

            <span className="text-[#00C853]">
              Our Execution.
            </span>

            <br />

            <span className="text-zinc-300">
              Perfected.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Syphon Apparel manufactures premium sportswear, jerseys,
            polo shirts, racing wear, hoodies, leather jackets,
            women's activewear and custom apparel for fashion brands,
            wholesalers, sports teams and e-commerce businesses with
            consistent quality, faster sampling and reliable worldwide
            delivery.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C853] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#00E676]"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>

            <a
              href="#products"
              className="rounded-full border border-zinc-700 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:border-[#00C853] hover:text-[#00E676]"
            >
              Explore Products
            </a>

          </div>

        </div>

        {/* Right Image */}

        <div className="relative flex justify-center lg:justify-end">

          {/* Glow */}

          <div className="absolute inset-0 rounded-[32px] bg-[#00C853]/20 blur-3xl" />

          <Image
            src="/images/hero-apparel-v2.png"
            alt="Syphon Apparel Premium Apparel Collection"
            width={700}
            height={700}
            priority
            className="relative z-10 w-full max-w-xl rounded-[32px] object-cover opacity-90 shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
          />

        </div>

      </div>

    </section>
  );
}