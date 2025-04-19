"use client";

import { useRouter } from "next/navigation";
import { formatGuideIdRoute } from "@/app/_lib/helpers/formatGuideIdRoute";

export default function ArrowRightSimpleIcon({ route }) {
  const router = useRouter();

  const handleClick = () => {
    if (!route) return;
    router.push(`/catalogue/${formatGuideIdRoute(route)}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="guide-icons cursor-pointer hover:-rotate-25 transition-transform duration-300"
      aria-label={`View Travel Guide: ${route}`}
      title={`View Travel Guide: ${route}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
}
