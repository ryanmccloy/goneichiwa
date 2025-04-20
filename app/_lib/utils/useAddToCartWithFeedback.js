import toast from "react-hot-toast";
import { useCartStore } from "../stores/cartStore";

export const useAddToCartWithFeedback = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const openMiniCart = useCartStore((state) => state.openMiniCart);
  const closeMiniCart = useCartStore((state) => state.closeMiniCart);

  return (item) => {
    addToCart(item);
    toast.success(`${item.title} travel guide added to cart`);
    openMiniCart();

    setTimeout(() => {
      closeMiniCart();
    }, 2000);
  };
};
