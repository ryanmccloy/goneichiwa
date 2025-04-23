"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/app/_lib/stores/authStore";
import { useOrderStore } from "@/app/_lib/stores/ordersStore";

export default function AccountClientProvider({ children }) {
  const { user } = useAuthStore();
  const fetchOrders = useOrderStore((s) => s.fetchOrders);

  useEffect(() => {
    if (user?.uid) {
      fetchOrders(user.uid);
    }
  }, [user?.uid, fetchOrders]);

  return <>{children}</>;
}
