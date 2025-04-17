import Link from "next/link";
import Image from "next/image";

import TravelGuideCardIcons from "./TravelGuideCardIcons";

export default function TravelGuideCard({
  destination,
  price,
  url,
  alt,
  suggestion = false,
}) {
  return (
    <Link
      href={`/catalogue/${destination.toLowerCase()}`}
      className={`group flex flex-col gap-15 ${
        suggestion ? "min-w-[300px]" : ""
      } `}
    >
      <div className="relative w-full h-[300px]">
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover rounded-global object-top"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="uppercase">{destination}</h5>
          <span>£{price}</span>
        </div>
        <TravelGuideCardIcons />
      </div>
    </Link>
  );
}
