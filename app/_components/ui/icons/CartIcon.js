"use client";

import { useRef, useState } from "react";
import MiniCart from "../../cartComponents/MiniCart";
import useOutsideClick from "@/app/_lib/hooks/useOutsideClick";

function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();

  useOutsideClick(cartRef, () => setIsOpen(false));

  const items = [
    {
      id: "tokyo-guide",
      title: "Tokyo Travel Guide",
      image: "/images/guides/tokyo.webp",
      quantity: 1,
      price: 5.0,
    },
    {
      id: "dolomites-guide",
      title: "Dolomites Adventure Guide",
      image: "/images/guides/dolomites.webp",
      quantity: 2,
      price: 10.0,
    },
    {
      id: "rome-guide",
      title: "Rome Historical Guide",
      image: "/images/guides/rome.webp",
      quantity: 1,
      price: 5.0,
    },
    {
      id: "tokyo-guide2",
      title: "Tokyo Travel Guide",
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
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative" ref={cartRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle cart"
        className={`nav-hover flex items-center justify-center ${
          isOpen ? "bg-off-white" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={`size-7 ${
            isOpen ? "text-off-black" : ""
          } transition-colors`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>

      {isOpen && (
        <MiniCart items={items} subtotal={subtotal} handleClose={setIsOpen} />
      )}
    </div>
  );
}

export default CartIcon;
