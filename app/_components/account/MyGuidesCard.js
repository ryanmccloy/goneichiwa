"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadIcon from "../ui/icons/DownloadIcon";
import { getImageUrl, getSpecificTravelGuide } from "@/app/_lib/data-service";
import { useEffect, useState } from "react";

function MyGuidesCard({ guideId }) {
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    const fetchGuide = async () => {
      const data = await getSpecificTravelGuide(guideId);
      const imageUrl = await getImageUrl(data.coverImage.path);
      setGuide({
        ...data,
        coverImage: {
          path: imageUrl,
          alt: data.coverImage.alt || data.title,
        },
      });
    };

    fetchGuide();
  }, [guideId]);

  if (!guide) return null;

  return (
    <Link href={`/catalogue/${guide.id}`} className="flex flex-col gap-15">
      <div className="relative h-[225px]">
        <Image
          src={guide.coverImage.path}
          alt={guide.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover object-top rounded-global"
        />
      </div>
      <div className="flex justify-between gap-15 flex-wrap">
        <span className="text-xs sm:text-sm uppercase flex-1 min-w-0">
          {guide.title}
        </span>
        <DownloadIcon />
      </div>
    </Link>
  );
}

export default MyGuidesCard;
