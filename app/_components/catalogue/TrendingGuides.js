"use client";

import TrendingGuidesDesktop from "./TrendingGuidesDesktop";
import TrendingGuidesMobile from "./TrendingGuidesMobile";

const trendingTravelGuides = [
  {
    title: "Japan",
    url: "/images/trending/japan.webp",
    alt: "tokyo",
    href: "/catalogue/japan",
  },
  {
    title: "USA",
    url: "/images/trending/usa.webp",
    alt: "tokyo",
    href: "/catalogue/usa",
  },
  {
    title: "Canada",
    url: "/images/trending/canada.webp",
    alt: "tokyo",
    href: "/catalogue/canada",
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
