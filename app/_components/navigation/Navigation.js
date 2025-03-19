"use client";

import { usePathname } from "next/navigation";
import Logo from "@/app/_components/navigation/Logo.js";
import NavList from "./NavList";
import Icons from "./Icons";

export default function Navigation() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <header>
      <nav className="width-size relative z-50 ">
        <div
          className={`pt-30 flex items-center absolute w-full top-0 left-0 px-30 md:px-60  ${
            isHome ? "text-off-white" : "text-off-black"
          } `}
          role="navigation"
          aria-label="Main navigation"
        >
          <NavList isHome={isHome} />

          <Logo />

          <Icons />
        </div>
      </nav>
    </header>
  );
}
