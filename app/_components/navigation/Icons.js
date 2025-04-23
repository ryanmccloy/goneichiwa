"use client";

import Link from "next/link";
import CartIcon from "../ui/icons/CartIcon";
import { useAuthStore } from "@/app/_lib/stores/authStore";

export default function Icons() {
  const user = useAuthStore((s) => s.user);
  return (
    <div className="flex-1 flex justify-end items-center ">
      <div className="flex gap-15 md:gap-30 fixed">
        <Link
          href={user ? "/account" : "/auth/sign-in"}
          aria-label="Go To Account"
          className="nav-styles "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>

        <CartIcon />
      </div>
    </div>
  );
}
