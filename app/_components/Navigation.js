import Logo from "@/app/_components/Logo.js";
import NavList from "./NavList";
import Icons from "./Icons";

export default function Navigation() {
  return (
    <nav className="pt-regular text-off-white flex items-center relative w-full">
      <NavList />

      <Logo />

      <Icons />
    </nav>
  );
}
