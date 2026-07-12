import Image from "next/image";

const signatureProducts = [
  {
    title: "Hoodies",
    description:
      "Heavyweight and lightweight custom hoodies designed for comfort, durability, and premium branding.",
    image: "/images/products/hoodie.png",
  },
  {
    title: "Racing Wear",
    description:
      "Professional motorsport apparel engineered for performance, safety, and customization.",
    image: "/images/products/racing.png",
  },
  {
    title: "Leather Jackets",
    description:
      "Premium genuine and faux leather jackets crafted with exceptional attention to detail.",
    image: "/images/products/leather.png",
  },
  {
    title: "Women's Activewear",
    description:
      "Sports bras, leggings, gym sets, and activewear built for movement, comfort, and style.",
    image: "/images/products/activewear.png",
  },
];

export default function SignatureProducts() {
  return (
    <section className="mb-24">

      <div className="mb-10 flex items-center gap-6">

        <h3 className="text-3xl font-bold text-white">
          Signature Collections
        </h3>

        <div className="h-px flex-1 bg-zinc-800"></div>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {signatureProducts.map((product) => (

          <div
            key={product.title}
            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#1A1A1A] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#00C853]/50 hover:shadow-[0_0_35px_rgba(0,200,83,0.18)]"
          >

            {/* Product Image */}
            <div className="relative h-[540px] overflow-hidden bg-gradient-to-br from-[#101010] via-[#171717] to-[#0E0E0E]">

              {/* Green Glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C853]/10 blur-3xl"></div>

              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain p-8 transition-all duration-700 group-hover:scale-110"
              />

              {/* Badge */}
              <div className="absolute left-6 top-6 rounded-full border border-[#00C853]/30 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#00E676] backdrop-blur">
                Signature Collection
              </div>

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

            </div>

            {/* Content */}
            <div className="border-t border-zinc-800 p-8">

              <h4 className="text-3xl font-bold text-white">
                {product.title}
              </h4>

              <p className="mt-4 leading-7 text-zinc-400">
                {product.description}
              </p>

              <button className="mt-6 font-semibold text-[#00C853] transition duration-300 hover:translate-x-2 hover:text-[#00E676]">
                Learn More →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}