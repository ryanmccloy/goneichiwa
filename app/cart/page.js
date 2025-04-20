"use client";

import { useCartStore } from "@/app/_lib/stores/cartStore";
import CartOverviewList from "../_components/cartComponents/CartOverviewList";
import CartSummaryAndCheckout from "../_components/cartComponents/CartSummaryAndCheckout";

// export const metadata = {
//   title: "Cart",
// };

export default function Page() {
  const items = useCartStore((state) => state.items);
  const subTotal = useCartStore((state) => state.subTotal);

  const isEmpty = items.length === 0;

  return (
    <section className="top-page-spacing md:-mt-30 lg:-mt-60  section-styles width-size ">
      <h2 className="text-2xl font-semibold mb-60">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-30 md:gap-60 lg:gap-90">
        {isEmpty ? (
          <p className="text-off-black">Your cart is empty 🛒</p>
        ) : (
          <CartOverviewList items={items} />
        )}

        {!isEmpty && <CartSummaryAndCheckout subTotal={subTotal} />}
      </div>
    </section>
  );
}
