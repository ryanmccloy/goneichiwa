"use client";
import { useCartStore } from "@/app/_lib/stores/cartStore";

import CartOverviewList from "./CartOverviewList";
import CartSummaryAndCheckout from "./CartSummaryAndCheckout";

export default function ClientCartPage() {
  const isEmpty = useCartStore((state) => state.items.length === 0);
  return (
    <section className="top-page-spacing md:-mt-30 lg:-mt-60  section-styles width-size ">
      <h2 className="text-2xl font-semibold mb-60">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-30 md:gap-60 lg:gap-90">
        {isEmpty ? (
          <p className="text-off-black">Your cart is empty 🛒</p>
        ) : (
          <CartOverviewList />
        )}

        {!isEmpty && <CartSummaryAndCheckout />}
      </div>
    </section>
  );
}
