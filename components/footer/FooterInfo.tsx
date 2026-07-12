import Image from "next/image";

export default function FooterInfo() {
  return (
    <div>

      {/* Logo */}
      <div className="flex items-center gap-4">

        <Image
          src="/images/logo.png"
          alt="Syphon Apparel Logo"
          width={60}
          height={60}
          className="object-contain"
        />

        <div>
          <h3 className="text-2xl font-bold text-white">
            Syphon Apparel
          </h3>

          <p className="text-sm uppercase tracking-[0.25em] text-[#00C853]">
            Apparel Manufacturing
          </p>
        </div>

      </div>

      {/* Description */}
      <p className="mt-8 max-w-sm leading-8 text-zinc-400">
        Syphon Apparel is a premium apparel manufacturer specializing in
        custom clothing, private label production, sportswear, racing
        apparel, leather garments, and high-quality fashion solutions
        for brands worldwide.
      </p>

      {/* Social Links */}
      <div className="mt-8 flex items-center gap-4">

        {/* Instagram */}
        <a
          href="https://instagram.com/syphonapparel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-[#181818] text-zinc-300 transition-all duration-300 hover:border-[#00C853] hover:bg-[#00C853] hover:text-black"
        >
          ig
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923037192156"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-[#181818] text-zinc-300 transition-all duration-300 hover:border-[#00C853] hover:bg-[#00C853] hover:text-black"
        >
          wa
        </a>

      </div>

    </div>
  );
}