import { getFeaturedTravelGuides } from "@/app/_lib/data-service";
import TrendingGuidesDesktop from "./TrendingGuidesDesktop";
import TrendingGuidesMobile from "./TrendingGuidesMobile";
import { formatGuidesWithImageUrl } from "@/app/_lib/helpers/formatGuidesWithImageUrl";
import { formatGuidesByIsActive } from "@/app/_lib/helpers/filterFunctions/formatGuidesByIsActive";

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

export default async function TrendingGuides() {
  const featuredGuides = await getFeaturedTravelGuides();

  if (!featuredGuides?.length)
    return (
      <p>
        We&apos;re having trouble displaying the featured guides. Please try
        again later.
      </p>
    );

  const featuredGuidesWithImageUrls = await formatGuidesWithImageUrl(
    featuredGuides
  );

  const sortedFeaturedGuidesWithImageUrls = formatGuidesByIsActive(
    featuredGuidesWithImageUrls
  );

  return (
    <section className="width-size">
      <TrendingGuidesMobile trending={sortedFeaturedGuidesWithImageUrls} />
      <TrendingGuidesDesktop
        trending={sortedFeaturedGuidesWithImageUrls.slice(0, 3)}
      />
    </section>
  );
}
