import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-[#101010]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          <FooterInfo />

          <FooterLinks />

          <FooterContact />

        </div>

      </div>

      <FooterBottom />

    </footer>
  );
}