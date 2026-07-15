export default function FooterContact() {
  return (
    <div>

      <h4 className="mb-6 text-xl font-semibold text-white">
        Contact
      </h4>

      <div className="space-y-6">

        <div>
          <p className="text-sm uppercase tracking-wider text-[#00C853]">
            Email
          </p>

          <a
            href="mailto:suppor@syphonapparel.com"
            className="mt-2 block text-zinc-400 transition hover:text-[#00C853]"
          >
            suppor@syphonapparel.com
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-[#00C853]">
            Phone
          </p>

          <a
            href="tel:+923037192156"
            className="mt-2 block text-zinc-400 transition hover:text-[#00C853]"
          >
            +92 303 7192156
          </a>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-[#00C853]">
            Location
          </p>

          <p className="mt-2 text-zinc-400">
            Sialkot, Pakistan
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-[#00C853]">
            Working Hours
          </p>

          <p className="mt-2 text-zinc-400">
            Monday – Saturday
            <br />
            9:00 AM – 6:00 PM
          </p>
        </div>

      </div>

    </div>
  );
}