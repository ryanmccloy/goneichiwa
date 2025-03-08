"use client";

import { useState } from "react";
import Link from "next/link";
import Burger from "./Burger";

export default function NavList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  console.log(isOpen);

  return (
    <div className="flex-1 lg:flex lg:items-center lg:justify-center ">
      {/* Burger */}
      <div className="lg:hidden">
        <Burger isOpen={isOpen} toggle={toggleMenu} />
      </div>

      {/* Nav List */}
      <div
        className={`absolute w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-7 pointer-events-auto"
            : "opacity-0 invisible -translate-y-5 pointer-events-none"
        } lg:block lg:opacity-100 lg:visible lg:w-fit lg:translate-y-0 lg:relative`}
      >
        <ul className="uppercase flex items-center justify-between text-small md:text-regular lg:gap-regular lg:justify center">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="consultations">Consultations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
