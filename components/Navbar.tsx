import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-[999] w-full border-b border-white/5 bg-[#151515]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-4 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Syphon Apparel Logo"
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain transition duration-300 hover:scale-105"
          />

          <div>
            <h2 className="text-xl font-bold text-white">
              Syphon Apparel
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] text-[#00C853]">
              Apparel Manufacturing
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center rounded-full border border-white/10 bg-white/5 p-1 md:flex">

          <a
            href="#top"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-[#00E676]"
          >
            Home
          </a>

          <a
            href="#about"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-[#00E676]"
          >
            About
          </a>

          <a
            href="#products"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-[#00E676]"
          >
            Products
          </a>

          <a
            href="#services"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-[#00E676]"
          >
            Services
          </a>

          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:text-[#00E676]"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/923037192156"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#00C853] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#00E676]"
        >
          Get Quote
        </a>

      </div>
    </nav>
  );
}