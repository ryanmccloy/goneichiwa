import Link from "next/link";
import Image from "next/image";

import TravelGuideCardIcons from "./TravelGuideCardIcons";
import ComingSoonOverlay from "./ComingSoonOverlay";

export default function TravelGuideCard({
  id,
  title,
  price,
  url,
  alt,
  isActive,
  suggestion = false,
}) {
  const item = {
    id,
    title,
    price,
    image: url,
    quantity: 1,
  };

  return (
    <div
      className={`flex flex-col gap-15   ${suggestion ? "min-w-[300px]" : ""}`}
    >
      <Link href={`/catalogue/${id}`} className="cursor-pointer">
        <div className=" relative w-full h-[300px]">
          <Image
            src={url}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover rounded-global object-top"
          />

          {/* Overlay */}
          {!isActive && <ComingSoonOverlay />}
        </div>
      </Link>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="uppercase">{title}</h5>
          <span>£{price}</span>
        </div>
        <TravelGuideCardIcons isActive={isActive} item={item} />
      </div>
    </div>
  );
}
