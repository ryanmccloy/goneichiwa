import Logo from "@/app/_components/navigation/Logo.js";
import NavList from "./NavList";
import Icons from "./Icons";

export default function Navigation() {
  return (
    <nav
      className="pt-regular text-off-white flex items-center relative w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <NavList />

      <Logo />

      <Icons />
    </nav>
  );
}
