import { useCartStore } from "@/app/_lib/stores/cartStore";

import Image from "next/image";
import Link from "next/link";
import BinIcon from "../ui/icons/BinIcon";

function MiniCartItem({ item }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className="flex gap-15 items-start">
      <Link href={`/catalogue/${item.id}`} className="flex gap-15 flex-1">
        <Image
          src={item.image}
          alt={item.title}
          width={56} // 14 * 4
          height={56}
          className="object-cover rounded object-top"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="text-sm font-medium">{item.title}</p>

            <div className="flex gap-15">
              <span className="text-sm font-semibold ml-30  ">
                £{item.price}
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
        </div>
      </Link>
      <span>
        <BinIcon onClick={() => removeFromCart(item.id)} />
      </span>
    </li>
  );
}

export default MiniCartItem;
