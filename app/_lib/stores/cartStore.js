"use client";

import { create } from "zustand";
import { saveUserCart } from "../data-service";
import { useAuthStore } from "./authStore";

export const useCartStore = create((set, get) => ({
  items: [],
  subTotal: null,
  isMiniCartOpen: false,
  // promo: null,

  // Set the cart when the user logs in
  setCart: (cartItems) => {
    set({
      items: cartItems,
      subTotal: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    });
  },

  // Sync the cart to Firestore
  syncCart: async () => {
    try {
      const { user } = useAuthStore.getState();
      if (!user) return; // no user, don't sync

      const items = get().items;
      await saveUserCart(user.uid, items);
    } catch (err) {
      console.error("[syncCart Error]:", err);
    }
  },

  // adding an item to the cart
  addToCart: (item) => {
    const items = get().items;
    const existing = items.find((i) => i.id === item.id);

    let newItems;
    if (existing) {
      newItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newItems = [...items, { ...item, quantity: 1 }];
    }

    set({
      items: newItems,
      subTotal: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    });

    get().syncCart();
  },

  // removing an item from the cart
  removeFromCart: (id) => {
    const newItems = get().items.filter((i) => i.id !== id);
    set({
      items: newItems,
      subTotal: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    });

    get().syncCart();
  },

  // clearing entire cart
  clearCart: () => {
    set({ items: [], subTotal: 0 });
    localStorage.removeItem("cart");
    get().syncCart();
  },

  // opening the MiniCart
  openMiniCart: () => set({ isMiniCartOpen: true }),

  // closing the MiniCart
  closeMiniCart: () => set({ isMiniCartOpen: false }),

  // toggling the open and closing MiniCart
  toggleMiniCart: () =>
    set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),
}));

if (typeof window !== "undefined") {
  try {
    const { user } = useAuthStore.getState();
    if (!user) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        useCartStore.setState({
          items: parsed,
          subTotal: parsed.reduce((acc, i) => acc + i.price * i.quantity, 0),
        });
      }
    }

    useCartStore.subscribe((state) => {
      localStorage.setItem("cart", JSON.stringify(state.items));
    });
  } catch (err) {
    console.error("Failed to hydrate cart from localStorage", err);
  }
}
