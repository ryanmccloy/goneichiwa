"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { getUserOrders } from "../data-service";

export const useUserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    const fetchOrders = async () => {
      try {
        const ordersData = await getUserOrders(user.uid);
        setOrders(ordersData);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [user?.uid]);

  return { orders, isLoading };
};
