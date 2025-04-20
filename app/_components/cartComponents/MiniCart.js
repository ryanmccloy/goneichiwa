"use client";

import { useCartStore } from "@/app/_lib/stores/cartStore";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import XIcon from "../ui/icons/XIcon";
import MiniCartItem from "./MiniCartItem";

export default function MiniCart({ handleClose }) {
  const cart = useCartStore((state) => state.items);
  const subTotal = useCartStore((state) => state.subTotal);

  const isEmpty = cart.length === 0;

  return (
    <AnimatePresence>
      <motion.div
        key="mini-cart"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 15 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 w-[320px] bg-off-white rounded-md text-off-black  z-50 p-5 shadow-md"
      >
        <div className="flex justify-between ">
          <h4 className="text-sm font-semibold ">Your Cart</h4>
          <XIcon handleClose={handleClose} />
        </div>

        {isEmpty ? (
          <p className="text-sm text-neutral-500 text-nowrap">
            Your cart is empty 🛒
          </p>
        ) : (
          <>
            <ul className="flex flex-col gap-15 max-h-[300px] overflow-y-auto mt-15 pr-15">
              {cart.map((item) => (
                <MiniCartItem key={item.id} item={item} />
              ))}
            </ul>

            <div className="flex justify-between mt-15 text-sm font-semibold">
              <span>Subtotal</span>
              <span className="pr-15">£{subTotal}</span>
            </div>

            <Link
              href="/cart"
              className="block mt-15 bg-accent-blue text-off-black text-center py-2 px-4 rounded-global text-sm"
            >
              View Full Cart
            </Link>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
