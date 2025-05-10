"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { useCartStore } from "@/app/_lib/stores/cartStore";
import { useAuthStore } from "@/app/_lib/stores/authStore";
import { useCheckout } from "@/app/_lib/hooks/useCheckout";
import { useState } from "react";

function CartSummaryAndCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items);
  const subTotal = useCartStore((state) => state.subTotal);

  const { handleCheckout } = useCheckout();

  const handleClick = async () => {
    setIsLoading(true);
    await handleCheckout({
      items,
      ...(user?.email ? { email: user.email } : {}),
    });
    setIsLoading(false);
  };

  return (
    <aside className="bg-off-white rounded-md p-15 md:p-30 shadow-md h-fit sticky top-90 flex flex-col gap-30">
      <h3 className="text-lg font-semibold ">Order Summary</h3>

      <div className="flex justify-between font-semibold ">
        <span>Subtotal</span>
        <span>£{subTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-center text-sm">
        <Button isActive={!isLoading} onClick={handleClick}>
          {!isLoading ? "Proceed to Checkout" : "Loading..."}
        </Button>
      </div>

      {!user && (
        <p className="text-xs text-center text-neutral-500 ">
          Already have an account or, would you like to create one?{" "}
          <Link href="/auth/sign-in?redirectTo=/cart" className="underline">
            Login / SignUp
          </Link>{" "}
          or continue as guest.
        </p>
      )}
    </aside>
  );
}

export default CartSummaryAndCheckout;
