import { useCartStore } from "../stores/cartStore";
import { fetchUserCart, saveUserCart } from "../data-service";

export const useCartSync = () => {
  const setCart = useCartStore((state) => state.setCart);
  const items = useCartStore((state) => state.items);

  const syncUserCartOnLogin = async (userId) => {
    try {
      const serverCart = await fetchUserCart(userId);

      // merge server and and offline cart
      const mergedCart = [...serverCart];

      items.forEach((localItem) => {
        const exists = mergedCart.find((item) => item.id === localItem.id);
        if (!exists) mergedCart.push(localItem);
      });

      setCart(mergedCart);
      await saveUserCart(userId, mergedCart);
    } catch (err) {
      console.error("[syncUserCartOnLogin Error]:", err);
    }
  };

  return { syncUserCartOnLogin };
};
