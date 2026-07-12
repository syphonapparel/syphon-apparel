const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const productLinks = [
  "Hoodies",
  "Racing Wear",
  "Leather Jackets",
  "Women's Activewear",
  "Custom Manufacturing",
];

export default function FooterLinks() {
  return (
    <div className="grid gap-12 sm:grid-cols-2">

      {/* Quick Links */}
      <div>
        <h4 className="mb-6 text-xl font-semibold text-white">
          Quick Links
        </h4>

        <ul className="space-y-4">
          {quickLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-zinc-400 transition-all duration-300 hover:pl-2 hover:text-[#00C853]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div>
        <h4 className="mb-6 text-xl font-semibold text-white">
          Products
        </h4>

        <ul className="space-y-4">
          {productLinks.map((product) => (
            <li
              key={product}
              className="text-zinc-400 transition-all duration-300 hover:pl-2 hover:text-[#00C853]"
            >
              {product}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}