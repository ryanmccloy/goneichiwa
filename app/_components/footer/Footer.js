import FooterNavigation from "./FooterNavigation";
import FooterContact from "./FooterContact";

function Footer() {
  return (
    <footer className="footer-styles">
      <div className="width-size flex flex-col gap-side md:flex-row md:justify-between">
        <FooterNavigation />
        <FooterContact />
      </div>
    </footer>
  );
}

export default Footer;
