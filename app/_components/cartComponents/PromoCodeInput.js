"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useCartStore } from "@/app/_lib/stores/cartStore";
import { getPromoCodeFromFirebase } from "@/app/_lib/data-service";
import Button from "../ui/Button";

export default function PromoCodeInput() {
  const [input, setInput] = useState("");
  const applyPromo = useCartStore((s) => s.applyPromo);

  const handleApply = async () => {
    const promo = await getPromoCodeFromFirebase(input);
    console.log(promo);

    if (!promo || !promo.isActive) {
      toast.error("Invalid promo code");
      return;
    }

    applyPromo(promo);
    toast.success(`Promo "${promo.code}" applied`);
  };

  return (
    <div className="flex gap-15">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter promo code"
      />
      <Button onClick={handleApply} className="button">
        Apply
      </Button>
    </div>
  );
}
