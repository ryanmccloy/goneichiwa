"use client";

import TrendingGuidesDesktop from "./TrendingGuidesDesktop";
import TrendingGuidesMobile from "./TrendingGuidesMobile";

const trendingTravelGuides = [
  {
    title: "Japan",
    url: "/images/trending/japan.webp",
    alt: "tokyo",
    href: "/blog",
  },
  {
    title: "USA",
    url: "/images/trending/usa.webp",
    alt: "tokyo",
    href: "/blog",
  },
  {
    title: "Canada",
    url: "/images/trending/canada.webp",
    alt: "tokyo",
    href: "/blog",
  },
];

export default function TrendingGuides() {
  return (
    <section className="width-size">
      <TrendingGuidesMobile trending={trendingTravelGuides} />
      <TrendingGuidesDesktop trending={trendingTravelGuides} />
    </section>
  );
}
