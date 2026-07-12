export default function ContactInfo() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#1A1A1A] p-10">

      <h3 className="text-3xl font-bold text-white">
        Get in Touch
      </h3>

      <p className="mt-5 leading-8 text-zinc-400">
        We're here to help you create premium apparel that reflects your
        brand. Whether you need custom manufacturing, private labeling,
        or bulk production, our team is ready to assist.
      </p>

      <div className="mt-10 space-y-8">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#00C853]">
            Email
          </p>

          <a
            href="mailto:support@syphonapparel.com"
            className="mt-2 block text-lg text-zinc-300 transition hover:text-[#00E676]"
          >
            support@syphonapparel.com
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#00C853]">
            Phone
          </p>

          <a
            href="tel:+923037192156"
            className="mt-2 block text-lg text-zinc-300 transition hover:text-[#00E676]"
          >
            +92 303 7192156
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#00C853]">
            Location
          </p>

          <p className="mt-2 text-lg text-zinc-300">
            Sialkot, Punjab, Pakistan
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#00C853]">
            Business Hours
          </p>

          <p className="mt-2 text-lg text-zinc-300">
            Monday – Saturday
            <br />
            9:00 AM – 6:00 PM (PKT)
          </p>
        </div>

      </div>

      <div className="mt-10 rounded-2xl border border-[#00C853]/20 bg-[#00C853]/5 p-6">
        <h4 className="text-lg font-semibold text-white">
          Why Choose Syphon Apparel?
        </h4>

        <ul className="mt-4 space-y-3 text-zinc-400">
          <li>✓ Premium quality manufacturing</li>
          <li>✓ Low & high MOQ production</li>
          <li>✓ Private label & OEM services</li>
          <li>✓ Fast communication & global shipping</li>
        </ul>
      </div>

    </div>
  );
}