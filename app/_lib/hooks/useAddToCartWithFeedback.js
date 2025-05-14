import toast from "react-hot-toast";
import { useCartStore } from "../stores/cartStore";
import { useRef } from "react";

export const useAddToCartWithFeedback = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openMiniCart = useCartStore((state) => state.openMiniCart);
  const closeMiniCart = useCartStore((state) => state.closeMiniCart);
  const isMiniCartOpen = useCartStore((state) => state.isMiniCartOpen);

  const closeTimeoutRef = useRef(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.title} travel guide added to cart`);

    // ✅ Only open minicart if it’s not already open
    if (!isMiniCartOpen) {
      openMiniCart();
    }

    // ✅ Reset timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      closeMiniCart();
      closeTimeoutRef.current = null;
    }, 3000);
  };

  return handleAddToCart;
};
