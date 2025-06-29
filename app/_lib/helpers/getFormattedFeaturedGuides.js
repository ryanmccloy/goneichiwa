import { getFeaturedTravelGuides } from "../data-service";
import { formatGuidesByIsActive } from "./filterFunctions/formatGuidesByIsActive";
import { formatGuidesWithImageUrl } from "./formatGuidesWithImageUrl";

export const getFormattedFeaturedGuides = async () => {
  const featuredGuides = await getFeaturedTravelGuides();
  const guidesWithImages = await formatGuidesWithImageUrl(featuredGuides);
  const sorted = formatGuidesByIsActive(guidesWithImages);

  const sanitized = sorted.map(({ createdAt, ...rest }) => rest); // omit createdAt

  sanitized.push({
    id: "view-all-guides",
    title: "View All Guides",
    coverImageUrl: "/images/landing/bestsellers/view-all.webp",
    coverImageAlt: "Japanese Souvenir Collage",
  });

  return sanitized;
};
