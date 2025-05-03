import { getFeaturedTravelGuides } from "../data-service";
import { formatGuidesByIsActive } from "./filterFunctions/formatGuidesByIsActive";
import { formatGuidesWithImageUrl } from "./formatGuidesWithImageUrl";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getFormattedFeaturedGuides = async () => {
  await wait(3000);
  const featuredGuides = await getFeaturedTravelGuides();
  const guidesWithImages = await formatGuidesWithImageUrl(featuredGuides);
  const sorted = formatGuidesByIsActive(guidesWithImages);

  sorted.push({
    id: "view-all-guides",
    title: "View All Guides",
    coverImageUrl: "/images/bestsellers/view-all.webp",
    coverImageAlt: "Japanese Souvenir Collage",
  });

  return sorted;
};
