"use client";

import { useRouter } from "next/navigation";

export default function ArrowRightSimpleIcon({ id, destination }) {
  const router = useRouter();

  const handleClick = () => {
    if (!id) return;
    router.push(`/catalogue/${id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="guide-icons cursor-pointer hover:-rotate-25 transition-transform duration-300"
      aria-label={`View Travel Guide: ${destination}`}
      title={`View Travel Guide: ${destination}`}
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
