import BestCard from "./BestCard";
import Slider from "../../ui/Slider";
import { getFeaturedTravelGuides, getImageUrl } from "@/app/_lib/data-service";
import { formatGuidesWithImageUrl } from "@/app/_lib/helpers/formatGuidesWithImageUrl";

export default async function GuidesCards() {
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

  featuredGuidesWithImageUrls.push({
    id: "view-all-guides",
    title: "View All Guides",
    coverImageUrl: "/images/bestsellers/view-all.webp",
    coverImageAlt: "Japanese Souvenir Collage",
  });

  return (
    <Slider>
      {featuredGuidesWithImageUrls.map((guide, index) => (
        <BestCard
          key={guide.id}
          title={guide.title}
          url={guide.coverImageUrl}
          alt={guide.coverImageAlt}
          lastCard={index === featuredGuidesWithImageUrls.length - 1}
        />
      ))}
    </Slider>
  );
}
