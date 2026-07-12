import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactCTA from "./ContactCTA";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#151515] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Let's Build Your
            <span className="block text-[#00C853]">
              Next Collection.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Whether you're launching a new brand or expanding an existing one,
            our team is ready to help bring your ideas to life with premium
            apparel manufacturing and custom production.
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

        {/* Bottom CTA */}
        <ContactCTA />

      </div>
    </section>
  );
}