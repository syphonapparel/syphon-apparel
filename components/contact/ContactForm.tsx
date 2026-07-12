export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#1A1A1A] p-10">

      <h3 className="text-3xl font-bold text-white">
        Request a Quote
      </h3>

      <p className="mt-4 text-zinc-400">
        Tell us about your project and we'll get back to you with a
        customized quotation.
      </p>

      <form className="mt-10 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Product Category"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

          <input
            type="text"
            placeholder="Estimated Quantity"
            className="rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
          />

        </div>

        <textarea
          rows={6}
          placeholder="Tell us about your project..."
          className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#00C853]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#00C853] py-4 text-lg font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-[#00E676]"
        >
          Request a Quote
        </button>

      </form>

    </div>
  );
}