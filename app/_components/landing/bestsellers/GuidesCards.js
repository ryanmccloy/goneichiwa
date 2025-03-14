"use client";

import { useState } from "react";
import BestCard from "./BestCard";

function GuidesCards() {
  const [isActive, setIsActive] = useState(0);

  const handleHover = (index) => {
    setIsActive(index);
  };

  const bestsellingGuides = [
    {
      title: "Japan",
      url: "/images/bestsellers/kyoto-pagoda.webp",
      alt: "Kyoto Pagoda",
    },
    {
      title: "Dolomites",
      url: "/images/bestsellers/dolomites-cover.webp",
      alt: "Dolomites Mountain Range",
    },
    {
      title: "Ireland",
      url: "/images/bestsellers/giants-causeway.webp",
      alt: "Giants Causeway",
    },
    {
      title: "Canada",
      url: "/images/bestsellers/moraine.webp",
      alt: "Kyoto Pagoda",
    },
    {
      title: "New Zealand",
      url: "/images/bestsellers/wanaka.webp",
      alt: "Lake Wanaka",
    },
  ];

  return (
    <div className="w-full flex gap-15">
      {bestsellingGuides.map((guide, index) => {
        return (
          <BestCard
            key={index}
            isActive={isActive === index}
            handleHover={() => handleHover(index)}
            title={guide.title}
            url={guide.url}
            alt={guide.alt}
          />
        );
      })}
    </div>
  );
}

export default GuidesCards;
