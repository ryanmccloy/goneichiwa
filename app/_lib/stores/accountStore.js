import { create } from "zustand";
import { getUserOrders, getUserSettings } from "@/app/_lib/data-service";

export const useAccountStore = create((set) => ({
  orders: [],
  savedBlogPosts: [],
  settings: {},
  isLoading: true,
  fetchOrders: async (userId) => {
    const orders = await getUserOrders(userId);
    set({ orders, isLoading: false });
  },
  setSettings: (settings) => set({ settings }),
  fetchSettings: async (userId) => {
    const settings = await getUserSettings(userId);
    set({ settings, isLoading: false });
  },
}));
