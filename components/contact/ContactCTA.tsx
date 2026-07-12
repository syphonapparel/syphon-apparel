export default function ContactCTA() {
  return (
    <div className="mt-16 rounded-3xl border border-[#00C853]/20 bg-gradient-to-r from-[#111111] to-[#1A1A1A] p-10 text-center">

      <h3 className="text-3xl font-bold text-white">
        Ready to Start Your Next Project?
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        Whether you're building a new clothing brand or expanding an
        existing collection, Syphon Apparel is ready to manufacture
        premium-quality apparel tailored to your vision.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <a
          href="mailto:suppor@syphonapparel.com"
          className="rounded-full bg-[#00C853] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#00E676]"
        >
          Email Us
        </a>

        <a
          href="https://wa.me/923037192156"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#00C853] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#00C853] hover:text-black"
        >
          WhatsApp
        </a>

      </div>

    </div>
  );
}