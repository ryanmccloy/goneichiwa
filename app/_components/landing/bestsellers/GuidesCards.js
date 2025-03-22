"use client";

import { useState } from "react";

import BestCard from "./BestCard";
import Slider from "../../ui/Slider";

export default function GuidesCards() {
  const [isActive, setIsActive] = useState(null);

  const bestsellingGuides = [
    {
      title: "Japan",
      url: "/images/bestsellers/kyoto-pagoda.webp",
      alt: "Kyoto Pagoda",
    },
    {
      title: "Dolomites",
      url: "/images/bestsellers/dolomites.webp",
      alt: "Dolomites Mountain Range",
    },
    {
      title: "Ireland",
      url: "/images/bestsellers/ireland.webp",
      alt: "Giants Causeway",
    },
    {
      title: "Canada",
      url: "/images/bestsellers/canada.webp",
      alt: "Moraine Lake",
    },
    {
      title: "New Zealand",
      url: "/images/bestsellers/new-zealand.webp",
      alt: "Lake Wanaka",
    },
    {
      title: "View All Guides",
      url: "/images/bestsellers/view-all.webp",
      alt: "Japan Souvenir Collage",
    },
  ];

  return (
    <Slider>
      {bestsellingGuides.map((guide, index) => (
        <BestCard
          key={guide.title}
          setIsActive={setIsActive}
          index={index}
          isActive={isActive === index}
          title={guide.title}
          url={guide.url}
          alt={guide.alt}
          lastCard={index === bestsellingGuides.length - 1}
        />
      ))}
    </Slider>
  );
}
