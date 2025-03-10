import Logo from "@/app/_components/navigation/Logo.js";
import NavList from "./NavList";
import Icons from "./Icons";

export default function Navigation() {
  return (
    <div className="section-styles relative z-10 ">
      <nav
        className="pt-regular text-off-white flex items-center absolute w-full top-0 left-0 px-regular md:px-side    "
        role="navigation"
        aria-label="Main navigation"
      >
        <NavList />

        <Logo />

        <Icons />
      </nav>
    </div>
  );
}
