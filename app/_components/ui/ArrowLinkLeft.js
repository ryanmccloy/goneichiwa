"use client";

import LeftArrow from "./icons/LeftArrow";
import { useRouter } from "next/navigation";

export default function ArrowLinkLeft({ children }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`flex gap-15 items-center cursor-pointer `}
    >
      <LeftArrow />
      <p className={`uppercase text-sm z-10 `}>{children}</p>
    </button>
  );
}
