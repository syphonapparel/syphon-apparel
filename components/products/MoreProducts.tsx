import Image from "next/image";

const moreProducts = [
  {
    title: "T-Shirts",
    description:
      "Premium custom t-shirts manufactured for fashion brands, businesses, and promotional collections.",
    image: "/images/products/tshirt.png",
  },
  {
    title: "Polo Shirts",
    description:
      "High-quality polo shirts with custom embroidery, printing, and private labeling options.",
    image: "/images/products/polo.png",
  },
  {
    title: "Shorts",
    description:
      "Comfortable casual and performance shorts produced with premium fabrics and craftsmanship.",
    image: "/images/products/shorts.png",
  },
  {
    title: "Tracksuits",
    description:
      "Complete tracksuits designed for sports teams, brands, and lifestyle collections.",
    image: "/images/products/tracksuit.png",
  },
  {
    title: "Custom Manufacturing",
    description:
      "Have something unique in mind? We manufacture apparel tailored entirely to your specifications.",
    image: "/images/products/custom.png",
  },
];

export default function MoreProducts() {
  return (
    <section className="mb-24">

      <div className="mb-10 flex items-center gap-6">

        <h3 className="text-3xl font-bold text-white">
          More Products
        </h3>

        <div className="h-px flex-1 bg-zinc-800"></div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {moreProducts.map((product) => (

          <div
            key={product.title}
            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#1A1A1A] transition-all duration-500 hover:-translate-y-2 hover:border-[#00C853]/50 hover:shadow-[0_0_30px_rgba(0,200,83,0.15)]"
          >

            {/* Product Image */}
            <div className="relative h-[340px] overflow-hidden bg-gradient-to-br from-[#101010] via-[#171717] to-[#0E0E0E]">

              {/* Green Glow */}
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C853]/10 blur-3xl"></div>

              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                className="object-contain p-6 transition-all duration-700 group-hover:scale-110"
              />

            </div>

            {/* Content */}
            <div className="border-t border-zinc-800 p-7">

              <h4 className="text-2xl font-bold text-white transition group-hover:text-[#00E676]">
                {product.title}
              </h4>

              <p className="mt-4 leading-7 text-zinc-400">
                {product.description}
              </p>

              <button className="mt-6 font-semibold text-[#00C853] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#00E676]">
                Learn More →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}