import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  subTotal: 45,
  isMiniCartOpen: false,

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
  },

  removeFromCart: (id) => {
    const newItems = get().items.filter((i) => i.id !== id);
    set({
      items: newItems,
      subtotal: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    });
  },

  clearCart: () => set({ items: [], subtotal: 0 }),

  openMiniCart: () => set({ isMiniCartOpen: true }),
  closeMiniCart: () => set({ isMiniCartOpen: false }),
  toggleMiniCart: () =>
    set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),
}));
