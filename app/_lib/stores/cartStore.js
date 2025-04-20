import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [
    {
      id: "tokyo",
      title: "Tokyo Travel Guide",
      image: "/images/guides/tokyo.webp",
      quantity: 1,
      price: 5.0,
    },
    {
      id: "osaka",
      title: "Osaka Travel Guide",
      image: "/images/guides/dolomites.webp",
      quantity: 2,
      price: 10.0,
    },
    {
      id: "japan",
      title: "Japan Travel Guide",
      image: "/images/guides/rome.webp",
      quantity: 1,
      price: 5.0,
    },
    {
      id: "mt-fuji",
      title: "Mt Fuji Travel Guide",
      image: "/images/guides/tokyo.webp",
      quantity: 1,
      price: 5.0,
    },
    {
      id: "dolomites-guide2",
      title: "Dolomites Adventure Guide",
      image: "/images/guides/dolomites.webp",
      quantity: 2,
      price: 10.0,
    },
    {
      id: "rome-guide2",
      title: "Rome Historical Guide",
      image: "/images/guides/rome.webp",
      quantity: 1,
      price: 5.0,
    },
  ],
  subTotal: 45,

  addToCart: (item) => {
    const items = get().items;
    const existing = items.find((i) => i.id === item.id);

    let newItems;
    if (existing) {
      newItems = items.map((i) => {
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i;
      });
    } else {
      newItems = [...items, { ...item, quantity: 1 }];
    }

    setImmediate({
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
}));
