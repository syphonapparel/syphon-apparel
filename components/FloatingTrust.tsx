import {
  Globe,
  Factory,
  ShieldCheck,
  Zap,
  Shirt,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Attention to every stitch and detail.",
  },
  {
    icon: Shirt,
    title: "Low MOQ",
    description: "Flexible quantities for growing brands.",
  },
  {
    icon: Factory,
    title: "Private Label",
    description: "Custom manufacturing for your brand.",
  },
  {
    icon: Zap,
    title: "Fast Sampling",
    description: "Quick turnaround from idea to sample.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Reliable delivery across global markets.",
  },
];

export default function FloatingTrust() {
  return (
    <section className="relative z-20 -mt-10 px-6">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-8 py-8 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">

        {/* Header */}

        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Built for Brands That Expect More
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            From first sample to final shipment, every order is handled with
            precision and consistency.
          </p>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-zinc-200" />

        {/* Features */}

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-50"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00C853]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#00C853]/15">
                  <Icon className="h-7 w-7 text-[#00C853]" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#111111] transition-colors duration-300 group-hover:text-[#00C853]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}