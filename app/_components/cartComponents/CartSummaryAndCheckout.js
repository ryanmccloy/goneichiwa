import Link from "next/link";
import Button from "../ui/Button";
import PromoCodeInput from "./PromoCodeInput";
import { useCartStore } from "@/app/_lib/stores/cartStore";

function CartSummaryAndCheckout() {
  const subTotal = useCartStore((state) => state.subTotal);
  const total = useCartStore((state) => state.getTotal());

  return (
    <aside className="bg-off-white rounded-md p-5 shadow-md h-fit sticky top-90 flex flex-col gap-30">
      <h3 className="text-lg font-semibold ">Order Summary</h3>

      <div className="flex justify-between  ">
        <span>Subtotal</span>
        <span>£{subTotal.toFixed(2)}</span>
      </div>

      <PromoCodeInput />

      <div className="flex justify-between font-semibold ">
        <span>Total</span>
        <span>£{total.toFixed(2)}</span>
      </div>

      <div className="flex justify-center">
        <Button>Proceed to Checkout</Button>
      </div>

      <p className="text-xs text-center text-neutral-500 ">
        Already have an account or, would you like to create one?{" "}
        <Link href="/auth" className="underline">
          Login / SignUp
        </Link>{" "}
        or continue as guest.
      </p>
    </aside>
  );
}

export default CartSummaryAndCheckout;
