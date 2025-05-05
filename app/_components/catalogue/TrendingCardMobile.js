"use client";

import Link from "next/link";
import Image from "next/image";
import TravelGuideCardIcons from "./TravelGuideCardIcons";
import ComingSoonOverlay from "./ComingSoonOverlay";
import { useState } from "react";
import ImageSkeleton from "../skeletons/SkeletonImage";
import { formatCartItem } from "@/app/_lib/helpers/formatCartItem";

export default function TrendingCardMobile({ guide }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const item = formatCartItem(guide);

  return (
    <div className="group min-w-[300px] rounded-global relative h-[450px] snap-start lg:hidden overflow-hidden">
      {/* Image and Link only */}
      <Link
        href={`/catalogue/${guide.id}`}
        className="absolute inset-0 z-10 rounded-global"
      >
        <ImageSkeleton isLoaded={isLoaded} />
        <Image
          src={guide.coverImageUrl}
          alt={guide.coverImageAlt}
          fill
          sizes="(max-width: 768px) 300px, 100vw"
          className={`rounded-global object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />

        {!guide.isActive && isLoaded && <ComingSoonOverlay />}
      </Link>

      {/* Title */}
      <div className="absolute top-15 left-15 z-20 bg-off-white rounded-global w-fit p-15 uppercase font-semibold">
        {guide.title}
      </div>

      {/* Cart Icons */}
      <div className="absolute bottom-15 right-15 z-20">
        <TravelGuideCardIcons item={item} isActive={guide.isActive} />
      </div>
    </div>
  );
}
