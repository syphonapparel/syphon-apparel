import Image from "next/image";
import {
  MessageCircle,
  BadgeCheck,
  Layers3,
  Globe2,
} from "lucide-react";

const promises = [
  {
    icon: MessageCircle,
    title: "Transparent",
    subtitle: "Communication",
  },
  {
    icon: BadgeCheck,
    title: "Consistent",
    subtitle: "Quality",
  },
  {
    icon: Layers3,
    title: "Flexible",
    subtitle: "Manufacturing",
  },
  {
    icon: Globe2,
    title: "Reliable Worldwide",
    subtitle: "Delivery",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden rounded-t-[40px] bg-[#F7F8FA] pt-28 pb-28 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Label */}
        <p className="mb-12 text-sm font-semibold uppercase tracking-[0.35em] text-[#00C853]">
          ABOUT
        </p>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-bold leading-tight text-[#111111] md:text-5xl">
              Manufacturing Partnerships.
              <br />
              Not Just Products.
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-gray-600">

              <p>
                Every successful clothing brand starts with a manufacturing
                partner they can rely on.
              </p>

              <p>
                At Syphon Apparel, exceptional manufacturing begins with
                understanding your vision, followed by clear communication,
                consistent quality, and meticulous attention to detail.
              </p>

              <p>
                Whether you're launching your first collection or scaling an
                established brand, we approach every project with the same
                commitment to quality, transparency, and long-term
                partnerships.
              </p>

              <div>
                <p>
                  From the first conversation to the final shipment, our goal
                  is simple.
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#111111]">
                  Make manufacturing feel effortless.
                </h3>
              </div>

            </div>

            {/* Promise Cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {promises.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00C853]/30 hover:shadow-xl"
                  >

                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00C853]/10 text-[#00C853] transition-all duration-300 group-hover:bg-[#00C853] group-hover:text-white">

                      <Icon size={22} />

                    </div>

                    <h4 className="text-base font-semibold text-[#111111]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.subtitle}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative lg:pt-14">

            {/* Glow */}
            <div className="absolute -right-10 top-8 h-56 w-56 rounded-full bg-[#00C853]/10 blur-3xl" />

            <div className="overflow-hidden rounded-3xl border border-black/5 shadow-2xl">

              <Image
                src="/images/factory-team.png"
                alt="Syphon Apparel Manufacturing"
                width={700}
                height={850}
                priority
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}