"use client";

import { useRef } from "react";

import useOutsideClick from "@/app/_lib/hooks/useOutsideClick";
import { useCartStore } from "@/app/_lib/stores/cartStore";

import MiniCart from "../../cartComponents/MiniCart";

function CartIcon() {
  const cartRef = useRef();
  const isMiniCartOpen = useCartStore((state) => state.isMiniCartOpen);
  const closeMiniCart = useCartStore((state) => state.closeMiniCart);
  const toggleMiniCart = useCartStore((state) => state.toggleMiniCart);

  useOutsideClick(cartRef, closeMiniCart);

  return (
    <div ref={cartRef}>
      <button
        type="button"
        onClick={toggleMiniCart}
        aria-label="Toggle cart"
        className={`nav-styles flex items-center justify-center ${
          isMiniCartOpen ? "bg-off-white" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={`size-6 ${
            isMiniCartOpen ? "text-off-black" : ""
          } transition-colors`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>

      {isMiniCartOpen && <MiniCart handleClose={closeMiniCart} />}
    </div>
  );
}

export default CartIcon;
