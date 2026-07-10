export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2E7D32] text-lg font-bold text-white">
            S
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#333333]">
              Syphon Apparel
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] text-[#2E7D32]">
              Apparel Manufacturing
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-[#2E7D32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#256A2A]">
          Get Quote
        </button>
      </div>
    </nav>
  );
}