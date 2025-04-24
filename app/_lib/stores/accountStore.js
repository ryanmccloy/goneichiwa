import { create } from "zustand";
import { getUserOrders } from "@/app/_lib/data-service";

export const useAccountStore = create((set) => ({
  orders: [],
  savedBlogPosts: [],
  settings: { newsletter: true },
  isLoading: true,
  fetchOrders: async (userId) => {
    const orders = await getUserOrders(userId);
    set({ orders, isLoading: false });
  },
}));
