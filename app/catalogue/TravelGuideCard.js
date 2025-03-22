import Link from "next/link";
import Image from "next/image";

import TravelGuideCardIcons from "./TravelGuideCardIcons";

export default function TravelGuideCard({ destination, price, url, alt }) {
  return (
    <Link href="" className="group flex flex-col gap-15">
      <div className="relative w-full h-[300px]">
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover rounded-global object-top"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="uppercase">{destination}</h5>
          <span>{price}</span>
        </div>
        <TravelGuideCardIcons />
      </div>
    </Link>
  );
}
