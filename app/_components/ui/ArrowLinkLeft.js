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
      <h4 className={`uppercase  text-regular  z-10 `}>{children}</h4>
    </button>
  );
}
