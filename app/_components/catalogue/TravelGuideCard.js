"use client";

import Link from "next/link";
import Image from "next/image";

import TravelGuideCardIcons from "./TravelGuideCardIcons";
import ComingSoonOverlay from "./ComingSoonOverlay";
import ImageSkeleton from "../skeletons/SkeletonImage";
import { useState } from "react";
import { formatCartItem } from "@/app/_lib/helpers/formatCartItem";

export default function TravelGuideCard({ guide, suggestion = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const item = formatCartItem(guide);

  return (
    <div
      className={`flex flex-col gap-15   ${suggestion ? "min-w-[300px]" : ""}`}
    >
      <Link href={`/catalogue/${guide.id}`} className="cursor-pointer">
        <div className=" relative w-full aspect-[4/3]">
          <ImageSkeleton isLoaded={isLoaded} />
          <Image
            src={guide.coverImageUrl}
            alt={guide.coverImageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className={`rounded-global object-cover object-top transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Overlay */}
          {!guide.isActive && isLoaded && <ComingSoonOverlay />}
        </div>
      </Link>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <h5 className="uppercase">{guide.title}</h5>
          <span>£{guide.price}</span>
        </div>
        <TravelGuideCardIcons isActive={guide.isActive} item={item} />
      </div>
    </div>
  );
}
