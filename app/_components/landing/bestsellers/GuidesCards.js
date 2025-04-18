import BestCard from "./BestCard";
import Slider from "../../ui/Slider";
import { getFeaturedTravelGuides, getImageUrl } from "@/app/_lib/data-service";

export default async function GuidesCards() {
  const featuredGuides = await getFeaturedTravelGuides();

  const featuredGuidesWithImageUrls = await Promise.all(
    featuredGuides.map(async (guide) => ({
      ...guide,
      coverImageUrl: await getImageUrl(guide.coverImage.path),
      coverImageAlt: guide.coverImage.alt,
    }))
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
