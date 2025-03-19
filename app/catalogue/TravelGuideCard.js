import Link from "next/link";
import Image from "next/image";

import ArrowRightSimpleIcon from "./ArrowRightSimpleIcon";
import AddToCartIcon from "./AddToCartIcon";

export default function TravelGuideCard({ destination, price, url, alt }) {
  return (
    <Link href="" className="flex flex-col gap-15">
      <div className="relative w-full h-[300px]">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover rounded-global"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="uppercase">{destination}</h5>
          <span>{price}</span>
        </div>
        <div className="flex gap-15">
          <ArrowRightSimpleIcon />
          <AddToCartIcon />
        </div>
      </div>
    </Link>
  );
}
