"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/app/_lib/stores/authStore";
import { useAccountStore } from "@/app/_lib/stores/accountStore";

export default function AccountClientProvider({ children }) {
  const { user } = useAuthStore();
  const fetchOrders = useAccountStore((s) => s.fetchOrders);
  const fetchSettings = useAccountStore((s) => s.fetchSettings);

  useEffect(() => {
    if (user?.uid) {
      fetchOrders(user.uid);
      fetchSettings(user.uid);
    }
  }, [user?.uid, fetchOrders, fetchSettings]);

  return <>{children}</>;
}
