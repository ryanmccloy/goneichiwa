import Image from "next/image";
import Link from "next/link";
import BinIcon from "../ui/icons/BinIcon";
import { useCartStore } from "@/app/_lib/stores/cartStore";

function CartOverviewList() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <ul className="flex flex-col gap-15">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center border-b border-neutral-200 pb-15"
        >
          <Link
            href={`/catalogue/${item.id}`}
            className="flex gap-4 items-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={64}
              height={64}
              className="rounded object-cover"
            />
            <div>
              <span className="font-medium">{item.title}</span>
              <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
            </div>
          </Link>
          <div className="flex items-center gap-15">
            <span className="font-semibold">£{item.price}</span>
            <BinIcon onClick={() => removeFromCart(item.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartOverviewList;
