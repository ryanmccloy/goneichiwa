"use client";

import useAuthListener from "@/app/_lib/hooks/useAuthListener";

export default function Providers({ children }) {
  useAuthListener();
  return <>{children}</>;
}
