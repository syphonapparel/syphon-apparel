export default function FooterBottom() {
  return (
    <div className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Syphon Apparel
          </span>
          . All Rights Reserved.
        </p>

        <p className="text-center">
          Crafting Quality{" "}
          <span className="mx-2 text-[#00C853]">•</span>
          Building Brands
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="transition hover:text-[#00C853]"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="transition hover:text-[#00C853]"
          >
            Terms
          </a>
        </div>

      </div>
    </div>
  );
}