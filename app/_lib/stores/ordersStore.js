import { create } from "zustand";
import { getUserOrders } from "@/app/_lib/data-service";

export const useOrderStore = create((set) => ({
  orders: [],
  isLoading: true,
  fetchOrders: async (userId) => {
    const orders = await getUserOrders(userId);
    set({ orders, isLoading: false });
  },
}));
