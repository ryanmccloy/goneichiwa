import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  subTotal: 45,
  isMiniCartOpen: false,
  promo: null,

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
  },

  // removing an item from the cart
  removeFromCart: (id) => {
    const newItems = get().items.filter((i) => i.id !== id);
    set({
      items: newItems,
      subTotal: newItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    });
  },

  // clearing entire cart
  clearCart: () => set({ items: [], subtotal: 0 }),

  // opening the MiniCart
  openMiniCart: () => set({ isMiniCartOpen: true }),

  // closing the MiniCart
  closeMiniCart: () => set({ isMiniCartOpen: false }),

  // toggling the open and closing MiniCart
  toggleMiniCart: () =>
    set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),

  // applying a promo code to the subTotal
  applyPromo: (promo) => {
    set({ promo });
  },

  // getting discount value
  getDiscount: () => {
    const { subTotal, promo } = get();
  
    if (!promo) return 0;
  
    return promo.type === "percentage"
      ? (subTotal * promo.amount) / 100
      : promo.amount;
  },
  

  // removing a promo code from the cart
  removePromo: () => set({ promo: null, discount: 0 }),

  // getting the total cart value including any discounts
  getTotal: () => {
    const { subTotal, promo } = get();

    if (!promo) return subTotal;

    const discount =
      promo.type === "percentage"
        ? (subTotal * promo.amount) / 100
        : promo.amount;

    return Math.max(0, subTotal - discount); // Ensure total can't go negative
  },
}));
