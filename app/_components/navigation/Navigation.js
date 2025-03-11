import Logo from "@/app/_components/navigation/Logo.js";
import NavList from "./NavList";
import Icons from "./Icons";

export default function Navigation() {
  return (
    <header>
      <nav className="width-size relative z-10 ">
        <div
          className="pt-30 text-off-white flex items-center absolute w-full top-0 left-0 px-30 md:px-60   "
          role="navigation"
          aria-label="Main navigation"
        >
          <NavList />

          <Logo />

          <Icons />
        </div>
      </nav>
    </header>
  );
}
