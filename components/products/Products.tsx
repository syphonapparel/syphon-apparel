import SignatureProducts from "./SignatureProducts";
import MoreProducts from "./MoreProducts";
import CustomManufacturing from "./CustomManufacturing";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#151515] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-[#00C853]/30 bg-[#00C853]/10 px-5 py-2 text-sm font-semibold text-[#00E676]">
            Our Product Range
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
             Designed for Your Vision.
              <span className="block text-[#00C853]">
                 Built for Growth.
                 </span>
         </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From everyday essentials to high-performance apparel,
            we manufacture clothing tailored to your brand's vision,
            quality standards, and market requirements.
          </p>

        </div>

        <SignatureProducts />

        <MoreProducts />

        <CustomManufacturing />

      </div>
    </section>
  );
}