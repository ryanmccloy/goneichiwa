"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const logoSrc = isHome ? "/logo/logo-light.svg" : "/logo/logo-dark.svg";

  return (
    <Link
      href="/"
      className="h-12 lg:h-16  flex-1 flex justify-center lg:justify-start lg:order-first"
    >
      <div className="relative h-full w-[100px] md:w-[150px]  ">
        <Image
          src={logoSrc}
          alt="Goneichiwa - travel guides & blog"
          fill
          className="object-contain "
        />
      </div>
    </Link>
  );
}
