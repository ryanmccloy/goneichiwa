"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BestCard from "./BestCard";

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
    <motion.div
      className="flex gap-15 cursor-grab pb-30 overflow-x-auto "
      dragConstraints={{ left: -300, right: 0 }}
      whileTap={{ cursor: "grabbing" }}
      tabIndex="-1"
    >
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
    </motion.div>
  );
}
